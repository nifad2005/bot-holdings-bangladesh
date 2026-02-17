import Link from "next/link";
import { ui } from "./ui";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className={`${ui.card} overflow-hidden`}>
        <div className="relative p-8">
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(900px circle at 20% 10%, color-mix(in srgb, var(--accent) 18%, transparent), transparent 55%)",
            }}
          />
          <div className="relative mx-auto max-w-2xl space-y-4 text-center">
            <h1 className={ui.h1}>BOT Holdings</h1>
            <p className={ui.lead}>Simple app downloads.</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/apps"
                className={`${ui.button} ${ui.buttonPrimary}`}
              >
                Browse Apps
              </Link>
              <Link href="/help" className={`${ui.button} ${ui.buttonGhost}`}>
                Help
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <Link
          href="/apps/bjm"
          className={`${ui.card} ${ui.cardHover} p-6`}
          aria-label="Open BJM app page"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="font-semibold">BJM</div>
                <span className={ui.badge}>Android APK</span>
              </div>
              <p className="text-sm text-[var(--muted)]">
                Bangladesh Jogajog Maddhom
              </p>
            </div>
            <span className="text-sm text-[var(--muted)]">→</span>
          </div>
        </Link>

        <Link href="/security" className={`${ui.card} ${ui.cardHover} p-6`}>
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="font-semibold">Safety first</div>
              <p className="text-sm text-[var(--muted)]">Verify before install</p>
            </div>
            <span className="text-sm text-[var(--muted)]">→</span>
          </div>
        </Link>
      </section>
    </div>
  );
}
