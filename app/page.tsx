import Link from "next/link";

export default function Home() {
  return (
    <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8">
      <div className="mx-auto max-w-2xl space-y-4 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">BOT Holdings</h1>
        <p className="text-sm leading-6 text-[var(--muted)]">
          Helpful apps and tools in one place.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/apps"
            className="inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--accent-foreground)] hover:opacity-95"
          >
            Browse Apps
          </Link>
          <Link
            href="/help"
            className="inline-flex items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-medium hover:bg-black/5"
          >
            Help
          </Link>
        </div>
      </div>
    </section>
  );
}
