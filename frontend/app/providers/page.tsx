"use client";

import { FormEvent, useState } from "react";

type Provider = {
  id: number;
  name: string;
  baseUrl: string;
  model: string;
  status: "Connected" | "Not Tested";
};

const initialProviders: Provider[] = [
  {
    id: 1,
    name: "OpenAI",
    baseUrl: "https://api.openai.com/v1",
    model: "gpt-4o-mini",
    status: "Not Tested",
  },
];

export default function ProvidersPage() {
  const [providers, setProviders] = useState(initialProviders);

  const [providerName, setProviderName] = useState("OpenAI");
  const [baseUrl, setBaseUrl] = useState("https://api.openai.com/v1");
  const [apiKey, setApiKey] = useState("");
  const [model, setModel] = useState("gpt-4o-mini");

  const [saving, setSaving] = useState(false);
  const [testing, setTesting] = useState(false);
  const [message, setMessage] = useState("");

  const handleProviderChange = (value: string) => {
    setProviderName(value);

    if (value === "OpenAI") {
      setBaseUrl("https://api.openai.com/v1");
      setModel("gpt-4o-mini");
    }

    if (value === "LM Studio") {
      setBaseUrl("http://localhost:1234/v1");
      setModel("local-model");
    }

    if (value === "OpenAI Compatible") {
      setBaseUrl("");
      setModel("");
    }
  };

  const handleSave = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!baseUrl.trim() || !model.trim()) {
      setMessage("Base URL and Model Name are required.");
      return;
    }

    setSaving(true);
    setMessage("");

    setTimeout(() => {
      const newProvider: Provider = {
        id: Date.now(),
        name: providerName,
        baseUrl,
        model,
        status: "Not Tested",
      };

      setProviders((current) => [...current, newProvider]);

      setSaving(false);
      setMessage("Provider configuration saved.");

      setApiKey("");
    }, 800);
  };

  const handleTest = () => {
    setTesting(true);
    setMessage("");

    setTimeout(() => {
      setTesting(false);
      setMessage(
        "Connection test completed. Backend integration will perform the real provider test.",
      );
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 px-8 py-6">
        <h1 className="text-3xl font-bold">AI Providers</h1>

        <p className="mt-2 text-sm text-slate-400">
          Configure the AI provider used for code reviews and code chat.
        </p>
      </header>

      <section className="grid gap-6 p-8 xl:grid-cols-[1fr_420px]">
        {/* Configuration */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold">Provider Configuration</h2>

            <p className="mt-1 text-sm text-slate-500">
              Configure an OpenAI-compatible AI endpoint.
            </p>
          </div>

          <form onSubmit={handleSave} className="space-y-5">
            {/* Provider */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Provider
              </label>

              <select
                value={providerName}
                onChange={(event) => handleProviderChange(event.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-blue-500"
              >
                <option>OpenAI</option>
                <option>LM Studio</option>
                <option>OpenAI Compatible</option>
              </select>
            </div>

            {/* Base URL */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Base URL
              </label>

              <input
                type="url"
                value={baseUrl}
                onChange={(event) => setBaseUrl(event.target.value)}
                placeholder="https://api.example.com/v1"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-blue-500"
              />

              <p className="mt-2 text-xs text-slate-600">
                Example: https://api.openai.com/v1
              </p>
            </div>

            {/* API Key */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                API Key
              </label>

              <input
                type="password"
                value={apiKey}
                onChange={(event) => setApiKey(event.target.value)}
                placeholder="Enter API key"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-blue-500"
              />

              <p className="mt-2 text-xs text-slate-600">
                API keys will be securely stored by the backend.
              </p>
            </div>

            {/* Model */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Model Name
              </label>

              <input
                type="text"
                value={model}
                onChange={(event) => setModel(event.target.value)}
                placeholder="gpt-4o-mini"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-blue-500"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleTest}
                disabled={testing}
                className="rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {testing ? "Testing..." : "Test Connection"}
              </button>

              <button
                type="submit"
                disabled={saving}
                className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {saving ? "Saving..." : "Save Provider"}
              </button>
            </div>

            {message && (
              <div className="rounded-lg border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-400">
                {message}
              </div>
            )}
          </form>
        </div>

        {/* Provider list */}
        <aside className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold">Configured Providers</h2>

            <p className="mt-1 text-sm text-slate-500">
              AI providers available to CodeLens.
            </p>
          </div>

          <div className="space-y-4">
            {providers.map((provider) => (
              <div
                key={provider.id}
                className="rounded-xl border border-slate-800 bg-slate-950 p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold">{provider.name}</h3>

                    <p className="mt-1 break-all text-xs text-slate-500">
                      {provider.baseUrl}
                    </p>
                  </div>

                  <span className="rounded-full bg-slate-800 px-2.5 py-1 text-xs text-slate-400">
                    {provider.status}
                  </span>
                </div>

                <div className="mt-4 border-t border-slate-800 pt-3">
                  <p className="text-xs text-slate-500">Model</p>

                  <p className="mt-1 text-sm text-slate-300">
                    {provider.model}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
}
