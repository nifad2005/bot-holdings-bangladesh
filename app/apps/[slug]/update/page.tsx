import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchAppBySlug } from "../../../apps-data";
import { ui } from "../../../ui";

function normalizeVersion(v: string) {
  return v.trim();
}

export default async function AppUpdatePage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { slug } = await params;
  const sp = await searchParams;

  const currentRaw = sp.current ?? sp.v ?? sp.version;
  const current =
    typeof currentRaw === "string"
      ? normalizeVersion(currentRaw)
      : Array.isArray(currentRaw) && typeof currentRaw[0] === "string"
        ? normalizeVersion(currentRaw[0])
        : "";

  const app = await fetchAppBySlug(slug);
  if (!app) notFound();

  const latest = app.version ? normalizeVersion(app.version) : "";
  const hasCurrent = current.length > 0;
  const hasLatest = latest.length > 0;

  const isUpToDate = hasCurrent && hasLatest ? current === latest : false;
  const downloadPath = `/api/download/${app.slug}`;

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <div className="text-sm text-[var(--muted)]">
          <Link href={`/apps/${app.slug}`} className="hover:underline">
            {app.name}
          </Link>{" "}
          / Update
        </div>
        <h1 className={ui.h2}>Update {app.name}</h1>
        <p className={ui.lead}>
          {hasCurrent ? `Current: v${current}` : "Current: unknown"}{" "}
          {hasLatest ? `• Latest: v${latest}` : ""}
        </p>
      </header>

      <section className={`${ui.card} p-6`}>
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="space-y-1">
            <div className="font-semibold">
              {isUpToDate
                ? "You’re up to date"
                : hasCurrent
                  ? "Update available"
                  : "Get the latest version"}
            </div>
            <div className="text-sm text-[var(--muted)]">
              {isUpToDate
                ? "No update needed."
                : "Download and install the latest APK."}
            </div>
          </div>
          <a
            href={downloadPath}
            download
            className={`${ui.button} ${ui.buttonPrimary}`}
          >
            {isUpToDate ? "Re-download" : "Update"}
          </a>
        </div>
      </section>

      {!hasCurrent ? (
        <section className={`${ui.card} p-6`}>
          <div className="text-sm text-[var(--muted)]">
            Tip: open this page like{" "}
            <code className="rounded bg-black/5 px-1 py-0.5">
              /apps/{app.slug}/update?current=1.0
            </code>
            .
          </div>
        </section>
      ) : null}

      <section className={`${ui.card} p-6`}>
        <div className="text-sm text-[var(--muted)]">
          Verify before installing.{" "}
          <Link href="/security" className="underline">
            Learn more
          </Link>
          .
        </div>
      </section>
    </div>
  );
}

