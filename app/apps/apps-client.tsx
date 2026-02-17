"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { AppRecord } from "../apps-data";
import { ui } from "../ui";

export default function AppsClient({ apps }: { apps: AppRecord[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return apps;
    return apps.filter((a) => {
      const haystack = `${a.name ?? ""} ${a.category ?? ""} ${a.description ?? ""}`
        .toLowerCase()
        .trim();
      return haystack.includes(q);
    });
  }, [apps, query]);

  return (
    <div className="space-y-4">
      <div className={`${ui.card} p-4`}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search apps…"
          className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/5"
          aria-label="Search apps"
        />
      </div>

      {filtered.length === 0 ? (
        <div className={`${ui.card} p-6 text-sm text-[var(--muted)]`}>
          No results.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((app) => (
            <Link
              key={app.id ?? app.slug}
              href={`/apps/${app.slug}`}
              className={`${ui.card} ${ui.cardHover} p-6`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="font-semibold">{app.name}</div>
                  {app.description ? (
                    <p className="text-sm text-[var(--muted)] line-clamp-2">
                      {app.description}
                    </p>
                  ) : null}
                </div>
                <span className="text-sm text-[var(--muted)]">→</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

