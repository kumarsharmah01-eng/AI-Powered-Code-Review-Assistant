import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

interface User {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
}

@Injectable()
export class AuthService {
  private users: User[] = [];

  constructor(private readonly jwtService: JwtService) {}

  async register(name: string, email: string, password: string) {
    const normalizedEmail = email.toLowerCase().trim();

    const existingUser = this.users.find(
      (user) => user.email === normalizedEmail,
    );

    if (existingUser) {
      throw new ConflictException('Email already registered');
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user: User = {
      id: Date.now().toString(),
      name,
      email: normalizedEmail,
      passwordHash,
    };

    this.users.push(user);

    return {
      message: 'User registered successfully',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
  }

  async login(email: string, password: string) {
    const normalizedEmail = email.toLowerCase().trim();

    const user = this.users.find((user) => user.email === normalizedEmail);

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const passwordMatch = await bcrypt.compare(password, user.passwordHash);

    if (!passwordMatch) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const payload = {
      sub: user.id,
      email: user.email,
    };

    const accessToken = this.jwtService.sign(payload);

    return {
      message: 'Login successful',
      accessToken,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
  }
}
