"use client";

import { FormEvent, useState } from "react";

type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

const initialMessages: Message[] = [
  {
    id: 1,
    role: "assistant",
    content:
      "Hi! I can help you understand and review the code uploaded to your project. Ask me about a function, error, security issue, architecture decision, or implementation detail.",
  },
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);

  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const question = input.trim();

    if (!question || sending) {
      return;
    }

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: question,
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setSending(true);

    setTimeout(() => {
      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content:
          "Based on the uploaded project context, this is a placeholder AI response. Once the backend is connected, CodeLens will analyze your actual project files and provide a contextual answer.",
      };

      setMessages((current) => [...current, assistantMessage]);
      setSending(false);
    }, 1000);
  };

  return (
    <main className="flex min-h-screen flex-col bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 px-6 py-5 md:px-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">AI Chat with Code</h1>

            <p className="mt-1 text-sm text-slate-400">
              Ask questions about the code uploaded to your project.
            </p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900 px-4 py-2">
            <p className="text-xs text-slate-500">Active Project</p>
            <p className="mt-1 text-sm font-medium">AI Code Review Assistant</p>
          </div>
        </div>
      </header>

      {/* Workspace */}
      <section className="flex flex-1 flex-col lg:flex-row">
        {/* Project context */}
        <aside className="border-b border-slate-800 bg-slate-900/40 p-5 lg:w-72 lg:border-b-0 lg:border-r">
          <h2 className="font-semibold">Code Context</h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            The AI assistant will use files from your selected project as
            context for answering questions.
          </p>

          <div className="mt-6 space-y-2">
            <ContextFile name="src/auth/auth.service.ts" />
            <ContextFile name="src/auth/auth.controller.ts" />
            <ContextFile name="src/projects/project.service.ts" />
            <ContextFile name="src/main.ts" />
            <ContextFile name="package.json" />
          </div>

          <div className="mt-6 rounded-lg border border-slate-800 bg-slate-950 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Context Status
            </p>

            <p className="mt-2 text-sm text-emerald-400">
              ● Project context loaded
            </p>
          </div>
        </aside>

        {/* Chat */}
        <div className="flex min-h-[650px] flex-1 flex-col">
          {/* Messages */}
          <div className="flex-1 space-y-6 overflow-y-auto p-6 md:p-8">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-3xl rounded-2xl px-5 py-4 ${
                    message.role === "user"
                      ? "bg-blue-600 text-white"
                      : "border border-slate-800 bg-slate-900 text-slate-300"
                  }`}
                >
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wide opacity-60">
                    {message.role === "user" ? "You" : "CodeLens AI"}
                  </div>

                  <p className="whitespace-pre-wrap text-sm leading-7">
                    {message.content}
                  </p>
                </div>
              </div>
            ))}

            {sending && (
              <div className="flex justify-start">
                <div className="rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4">
                  <p className="text-sm text-slate-500">
                    CodeLens AI is thinking...
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-slate-800 bg-slate-950 p-5 md:p-6">
            <form
              onSubmit={sendMessage}
              className="mx-auto flex max-w-5xl gap-3"
            >
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask something about your code..."
                disabled={sending}
                className="min-w-0 flex-1 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
              />

              <button
                type="submit"
                disabled={!input.trim() || sending}
                className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-slate-800 disabled:text-slate-500"
              >
                Send
              </button>
            </form>

            <p className="mx-auto mt-3 max-w-5xl text-xs text-slate-600">
              AI responses will be generated from your uploaded project context
              after backend integration.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContextFile({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-950 px-3 py-2.5">
      <span className="text-sm">📄</span>

      <span className="truncate text-xs text-slate-400">{name}</span>
    </div>
  );
}
