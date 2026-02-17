import Link from "next/link";
import { ui } from "../../ui";

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
        <h1 className={ui.h2}>BJM (Bangladesh Jogajog Maddhom)</h1>
        <p className={ui.lead}>Android APK</p>
      </header>

      <section className={`${ui.card} p-6`}>
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="space-y-1">
            <div className="font-semibold">Install BJM</div>
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

      <section className="grid gap-4 md:grid-cols-2">
        <div className={`${ui.card} p-6`}>
          <h2 className="text-base font-semibold">Details</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
            <li>Category: Communication</li>
            <li>
              Source:{" "}
              <a
                className="underline"
                href="https://github.com/nifad2005/BOT-App-Store/releases"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Releases
              </a>
            </li>
          </ul>
        </div>
        <div className={`${ui.card} p-6`}>
          <h2 className="text-base font-semibold">Safety</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
            <li>
              Verify before installing.{" "}
              <Link href="/security" className="underline">
                Learn more
              </Link>{" "}
              .
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
