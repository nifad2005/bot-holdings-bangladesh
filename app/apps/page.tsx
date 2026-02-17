import Link from "next/link";

type AppItem = {
  name: string;
  description: string;
  href: string;
};

const apps: AppItem[] = [
  {
    name: "BJM (Bangladesh Jogajog Maddhom)",
    description: "A communication app for Bangladesh.",
    href: "/apps/bjm",
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
          return (
            <Link
              key={app.name}
              href={app.href}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 hover:bg-black/5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="font-semibold">{app.name}</div>
                  <p className="text-sm text-[var(--muted)]">
                    {app.description}
                  </p>
                </div>
                <span className="text-sm text-[var(--muted)]">→</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
