"use client";

import { useState } from "react";

const menuItems = [
  { name: "Dashboard", icon: "⌂" },
  { name: "Projects", icon: "▣" },
  { name: "Reviews", icon: "◈" },
  { name: "AI Providers", icon: "✦" },
  { name: "Chat", icon: "◌" },
];

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-slate-800 bg-slate-950">
      {/* Logo */}
      <div className="flex h-20 items-center border-b border-slate-800 px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 font-bold text-white">
            C
          </div>

          <div>
            <h1 className="text-lg font-bold text-white">CodeLens</h1>
            <p className="text-xs text-slate-500">AI Code Review</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Workspace
        </p>

        <div className="space-y-1">
          {menuItems.map((item) => {
            const active = activeItem === item.name;

            return (
              <button
                key={item.name}
                onClick={() => setActiveItem(item.name)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm transition ${
                  active
                    ? "bg-blue-600/10 text-blue-400"
                    : "text-slate-400 hover:bg-slate-900 hover:text-white"
                }`}
              >
                <span className="w-5 text-center text-base">{item.icon}</span>

                <span>{item.name}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Bottom navigation */}
      <div className="border-t border-slate-800 p-4">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm text-slate-400 transition hover:bg-slate-900 hover:text-white">
          <span>⚙</span>
          <span>Settings</span>
        </button>

        <button className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm text-slate-400 transition hover:bg-slate-900 hover:text-white">
          <span>↪</span>
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
