"use client";

import { useEffect, useState } from "react";

type Theme = "white" | "green";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "white") {
    delete root.dataset.theme;
  } else {
    root.dataset.theme = theme;
  }
  try {
    localStorage.setItem("bot_theme", theme);
  } catch {}
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("white");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("bot_theme") as Theme | null;
      if (saved === "green" || saved === "white") {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTheme(saved);
      }
    } catch {}
  }, []);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => setTheme((t) => (t === "white" ? "green" : "white"))}
      className="ml-1 inline-flex items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--card)] px-3 py-2 text-sm text-[var(--fg)] hover:bg-black/5"
      aria-label="Toggle theme"
    >
      <span
        className="h-2.5 w-2.5 rounded-full"
        style={{ background: "var(--accent)" }}
      />
      {theme === "white" ? "White" : "Green"}
    </button>
  );
}
