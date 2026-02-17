import Link from "next/link";

const downloadPath = "/api/download/bjm";

export default function BjmDetailsPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <div className="text-sm text-[var(--muted)]">
          <Link href="/apps" className="hover:underline">
            Apps
          </Link>{" "}
          / BJM
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">
          BJM (Bangladesh Jogajog Maddhom)
        </h1>
        <p className="text-[var(--muted)]">
          BJM is a communication app for Bangladesh. Use the install button
          below to download the latest build.
        </p>
      </header>

      <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="space-y-1">
            <div className="font-semibold">Install BJM</div>
            <div className="text-sm text-[var(--muted)]">
              Download the app installer.
            </div>
          </div>
          <a
            href={downloadPath}
            download
            className="inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--accent-foreground)] hover:opacity-95"
          >
            Install / Download
          </a>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
          <h2 className="text-base font-semibold">Details</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
            <li>App name: BJM</li>
            <li>Full name: Bangladesh Jogajog Maddhom</li>
            <li>Category: Communication</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
          <h2 className="text-base font-semibold">Notes</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
            <li>
              If your browser blocks automatic downloads, allow downloads for
              this site and try again.
            </li>
            <li>
              Some large Drive files may show a confirmation screen; the install
              button uses a direct-download link to reduce that.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
