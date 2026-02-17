import Link from "next/link";
import { ui } from "../ui";

export default function SecurityPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className={ui.h2}>Security</h1>
        <p className={ui.lead}>Stay safe</p>
      </header>

      <section className={`${ui.card} p-6`}>
        <h2 className="text-base font-semibold">Downloads</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
          <li>Install only if you trust the source.</li>
          <li>Check app name + file name.</li>
        </ul>
      </section>

      <section className={`${ui.card} p-6`}>
        <h2 className="text-base font-semibold">Issues</h2>
        <p className="mt-3 text-sm text-[var(--muted)]">
          If a link looks wrong, stop and go back to{" "}
          <Link href="/apps" className="underline">
            Apps
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
