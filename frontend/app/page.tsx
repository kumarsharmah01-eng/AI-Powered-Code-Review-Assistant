"use client";

import Link from "next/link";

const features = [
  {
    icon: "⌘",
    title: "AI Code Review",
    description:
      "Analyze your code with AI and get clear issues, recommendations, and severity levels.",
  },
  {
    icon: "⌕",
    title: "Code Explorer",
    description:
      "Upload your project and explore folders, files, and source code from one workspace.",
  },
  {
    icon: "◉",
    title: "Multiple AI Providers",
    description:
      "Connect OpenAI, LM Studio, or any OpenAI-compatible AI provider.",
  },
  {
    icon: "◷",
    title: "Review History",
    description:
      "Keep track of previous reviews and quickly revisit important findings.",
  },
  {
    icon: "✦",
    title: "AI Chat with Code",
    description:
      "Ask questions about your uploaded code and get answers using your project context.",
  },
  {
    icon: "◎",
    title: "Architecture Analysis",
    description:
      "Understand your application's architecture and identify areas for improvement.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#070b14] text-white">
      {/* Navbar */}
      <nav className="border-b border-white/10 bg-[#070b14]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold shadow-lg shadow-blue-600/20">
              C
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-tight">CodeLens</h1>
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                AI Code Review
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              Features
            </a>

            <a
              href="#how-it-works"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              How It Works
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold transition hover:bg-blue-500"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-24 lg:px-8 lg:pb-32 lg:pt-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              AI-powered developer workspace
            </div>

            <h2 className="text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Understand your code.
              <span className="block text-blue-500">Improve it with AI.</span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              CodeLens helps developers review code, discover issues, explore
              projects, chat with their codebase, and understand application
              architecture — all from one workspace.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/register"
                className="rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold shadow-xl shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Start Reviewing Code
              </Link>

              <Link
                href="/login"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.07]"
              >
                Sign In
              </Link>
            </div>
          </div>

          {/* Code Preview */}
          <div className="mx-auto mt-20 max-w-5xl">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d1320] shadow-2xl shadow-black/30">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                  <span className="h-3 w-3 rounded-full bg-green-400/70" />
                </div>

                <span className="text-xs text-slate-500">auth.service.ts</span>

                <span className="rounded-md bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
                  AI Review
                </span>
              </div>

              <div className="grid md:grid-cols-[1fr_280px]">
                <div className="overflow-x-auto p-6 font-mono text-sm leading-7">
                  <div>
                    <span className="text-slate-600">01</span>{" "}
                    <span className="text-purple-400">async</span>{" "}
                    <span className="text-blue-400">login</span>(
                    <span className="text-orange-300">email</span>,
                    <span className="text-orange-300">password</span>) {"{"}
                  </div>

                  <div>
                    <span className="text-slate-600">02</span>{" "}
                    <span className="text-purple-400">const</span> user ={" "}
                    <span className="text-purple-400">await</span>{" "}
                    <span className="text-blue-300">findUser</span>(email);
                  </div>

                  <div>
                    <span className="text-slate-600">03</span>{" "}
                    <span className="text-purple-400">if</span> (!user) {"{"}
                  </div>

                  <div>
                    <span className="text-slate-600">04</span>{" "}
                    <span className="text-purple-400">return</span>{" "}
                    <span className="text-orange-300">null</span>;
                  </div>

                  <div>
                    <span className="text-slate-600">05</span> {"}"}
                  </div>

                  <div>
                    <span className="text-slate-600">06</span>{" "}
                    <span className="text-purple-400">return</span>{" "}
                    <span className="text-blue-300">authenticate</span>( user,
                    password);
                  </div>

                  <div>
                    <span className="text-slate-600">07</span> {"}"}
                  </div>
                </div>

                <div className="border-t border-white/10 bg-[#101827] p-5 md:border-l md:border-t-0">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-semibold">Review Result</span>

                    <span className="rounded-md bg-orange-500/10 px-2 py-1 text-xs text-orange-400">
                      Medium
                    </span>
                  </div>

                  <div className="space-y-4 text-xs">
                    <div>
                      <p className="mb-1 font-medium text-slate-300">Summary</p>
                      <p className="leading-5 text-slate-500">
                        Authentication logic can be improved with stronger
                        validation and error handling.
                      </p>
                    </div>

                    <div>
                      <p className="mb-1 font-medium text-slate-300">
                        Recommendation
                      </p>
                      <p className="leading-5 text-slate-500">
                        Validate credentials before executing authentication
                        logic.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Features
            </p>

            <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need for smarter code reviews.
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              A focused workspace for understanding, reviewing, and improving
              your codebase with AI.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.04]"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400">
                  {feature.icon}
                </div>

                <h4 className="text-lg font-semibold">{feature.title}</h4>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="border-t border-white/10 bg-[#090e18]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Workflow
            </p>

            <h3 className="mt-3 text-3xl font-bold sm:text-4xl">
              From project to review in three steps.
            </h3>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Create a project",
                text: "Create your workspace and define the project you want to analyze.",
              },
              {
                number: "02",
                title: "Upload your code",
                text: "Upload your project as a ZIP and explore its files directly inside CodeLens.",
              },
              {
                number: "03",
                title: "Review with AI",
                text: "Run AI-powered reviews, inspect findings, and chat with your codebase.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-white/10 bg-[#0d1320] p-7"
              >
                <span className="text-sm font-bold text-blue-500">
                  {step.number}
                </span>

                <h4 className="mt-5 text-xl font-semibold">{step.title}</h4>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-8">
          <h3 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Build better software with
            <span className="text-blue-500"> CodeLens.</span>
          </h3>

          <p className="mx-auto mt-5 max-w-xl text-slate-400">
            Bring your codebase into one intelligent workspace and start
            understanding your code more deeply.
          </p>

          <Link
            href="/register"
            className="mt-8 inline-flex rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold transition hover:bg-blue-500"
          >
            Create Your Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 CodeLens. AI-Powered Code Review Assistant.</p>

          <div className="flex gap-5">
            <Link href="/login" className="hover:text-white">
              Login
            </Link>

            <Link href="/register" className="hover:text-white">
              Register
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
