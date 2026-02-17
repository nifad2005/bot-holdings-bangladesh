import Link from "next/link";
import { ui } from "../ui";

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
        <h1 className={ui.h2}>Apps</h1>
        <p className={ui.lead}>Downloads</p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {apps.map((app) => {
          return (
            <Link
              key={app.name}
              href={app.href}
              className={`${ui.card} ${ui.cardHover} p-6`}
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
