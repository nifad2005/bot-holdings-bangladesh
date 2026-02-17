import Link from "next/link";
import { ui } from "../ui";
import { fetchApps } from "../apps-data";
import AppsClient from "./apps-client";

export default async function AppsPage() {
  const apps = await fetchApps();
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className={ui.h2}>Apps</h1>
        <p className={ui.lead}>Downloads</p>
      </header>

      {apps.length === 0 ? (
        <div className={`${ui.card} p-6 text-sm text-[var(--muted)]`}>
          No apps found.
        </div>
      ) : (
        <AppsClient apps={apps} />
      )}

      <div className="hidden grid gap-4 md:grid-cols-2">
        {apps.map((app) => {
          return (
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
          );
        })}
      </div>
    </div>
  );
}
