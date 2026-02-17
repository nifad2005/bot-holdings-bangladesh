export default function HelpPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Help</h1>
        <p className="text-[var(--muted)]">
          Quick info about BOT Holdings and how to navigate the site.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
          <h2 className="text-base font-semibold">Navigation</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
            <li>
              Use the top menu to move between <b>Home</b>, <b>Apps</b>, and{" "}
              <b>Help</b>.
            </li>
            <li>
              The <b>Apps</b> page lists available tools and what’s coming soon.
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
          <h2 className="text-base font-semibold">Themes</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
            <li>
              Use the theme button in the header to switch between <b>White</b>{" "}
              and <b>Green</b>.
            </li>
            <li>Your selection is saved for next time.</li>
          </ul>
        </div>
      </section>

      <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
        <h2 className="text-base font-semibold">About BOT Holdings</h2>
        <p className="mt-3 text-sm text-[var(--muted)]">
          BOT Holdings is a simple hub for utilities and internal apps. This site
          is intentionally minimal, fast, and easy to navigate.
        </p>
      </section>
    </div>
  );
}

