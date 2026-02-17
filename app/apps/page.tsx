import Link from "next/link";

type AppItem = {
  name: string;
  description: string;
  href: string;
  status?: "Available" | "Coming soon";
};

const apps: AppItem[] = [
  {
    name: "App Directory",
    description: "The central list of all tools on BOT Holdings.",
    href: "/apps",
    status: "Available",
  },
  {
    name: "Support Center",
    description: "Guides and help for using the platform.",
    href: "/help",
    status: "Available",
  },
  {
    name: "Finance Tracker",
    description: "Track budgets, income, and expenses (planned).",
    href: "#",
    status: "Coming soon",
  },
  {
    name: "Task Hub",
    description: "Simple task lists and reminders (planned).",
    href: "#",
    status: "Coming soon",
  },
];

export default function AppsPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Apps</h1>
        <p className="text-[var(--muted)]">
          A simple directory of helpful apps. More tools can be added here over
          time.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {apps.map((app) => {
          const clickable = app.href !== "#";
          const Card = clickable ? Link : "div";

          return (
            <Card
              key={app.name}
              {...(clickable ? { href: app.href } : {})}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 hover:bg-black/5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">{app.name}</div>
                    {app.status ? (
                      <span
                        className="rounded-full border border-[var(--border)] px-2 py-0.5 text-xs text-[var(--muted)]"
                        aria-label={`Status: ${app.status}`}
                      >
                        {app.status}
                      </span>
                    ) : null}
                  </div>
                  <p className="text-sm text-[var(--muted)]">
                    {app.description}
                  </p>
                </div>
                <span className="text-sm text-[var(--muted)]">
                  {clickable ? "→" : ""}
                </span>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

