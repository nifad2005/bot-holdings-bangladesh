import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchAppBySlug } from "../../apps-data";
import { ui } from "../../ui";
import ShareMenu from "../share-menu";

export default async function AppDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = await fetchAppBySlug(slug);
  if (!app) notFound();

  const downloadPath = `/api/download/${app.slug}`;

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <div className="text-sm text-[var(--muted)]">
          <Link href="/apps" className="hover:underline">
            Apps
          </Link>{" "}
          / {app.slug}
        </div>

        <div className="flex items-center gap-3">
          {app.icon_url ? (
            <Image
              src={app.icon_url}
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 rounded-xl border border-[var(--border)] bg-white object-contain"
            />
          ) : null}
          <h1 className={ui.h2}>{app.name}</h1>
        </div>

        <p className={ui.lead}>
          {app.category ? app.category : "App"}
          {app.version ? ` • v${app.version}` : ""}
          {app.file_size ? ` • ${app.file_size}` : ""}
        </p>
      </header>

      <section className={`${ui.card} p-6`}>
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="space-y-1">
            <div className="font-semibold">Download</div>
            <div className="text-sm text-[var(--muted)]">Latest version</div>
          </div>
          <a
            href={downloadPath}
            download
            className={`${ui.button} ${ui.buttonPrimary}`}
          >
            Download
          </a>
        </div>
      </section>

      <ShareMenu title={app.name} text={app.description ?? ""} />

      {app.description ? (
        <section className={`${ui.card} p-6`}>
          <p className="text-sm text-[var(--muted)]">{app.description}</p>
        </section>
      ) : null}

      <section className="grid gap-4 md:grid-cols-2">
        <div className={`${ui.card} p-6`}>
          <h2 className="text-base font-semibold">Info</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
            {app.updated_at ? <li>Updated: {app.updated_at}</li> : null}
            {app.github_release_url ? (
              <li>
                Source:{" "}
                <a
                  className="underline"
                  href={app.github_release_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Release
                </a>
              </li>
            ) : null}
          </ul>
        </div>

        <div className={`${ui.card} p-6`}>
          <h2 className="text-base font-semibold">Safety</h2>
          <p className="mt-3 text-sm text-[var(--muted)]">
            Verify before installing.{" "}
            <Link href="/security" className="underline">
              Learn more
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
