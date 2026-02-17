import { ui } from "../ui";

export default function PrivacyPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className={ui.h2}>Privacy</h1>
        <p className={ui.lead}>Simple</p>
      </header>

      <section className={`${ui.card} p-6`}>
        <h2 className="text-base font-semibold">What we store</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
          <li>
            Theme preference (White/Green) in your browser.
          </li>
          <li>No account required.</li>
        </ul>
      </section>

      <section className={`${ui.card} p-6`}>
        <h2 className="text-base font-semibold">Downloads</h2>
        <p className="mt-3 text-sm text-[var(--muted)]">
          Downloads may come from third-party hosts (e.g., GitHub).
        </p>
      </section>
    </div>
  );
}
