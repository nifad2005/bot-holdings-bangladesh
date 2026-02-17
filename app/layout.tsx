import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import ThemeToggle from "./theme-toggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BOT Holdings",
  description: "BOT Holdings — helpful tools and apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('bot_theme');if(t){document.documentElement.dataset.theme=t;}}catch(e){}})();",
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-dvh">
          <header className="sticky top-0 z-10 border-b border-[var(--border)] bg-[var(--bg)] backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
              <Link
                href="/"
                className="text-base font-semibold tracking-tight"
              >
                BOT Holdings
              </Link>
              <nav className="flex items-center gap-2 text-sm">
                <Link
                  href="/"
                  className="rounded-md px-3 py-2 text-[var(--muted)] hover:bg-black/5 hover:text-[var(--fg)]"
                >
                  Home
                </Link>
                <Link
                  href="/apps"
                  className="rounded-md px-3 py-2 text-[var(--muted)] hover:bg-black/5 hover:text-[var(--fg)]"
                >
                  Apps
                </Link>
                <Link
                  href="/help"
                  className="rounded-md px-3 py-2 text-[var(--muted)] hover:bg-black/5 hover:text-[var(--fg)]"
                >
                  Help
                </Link>
                <ThemeToggle />
              </nav>
            </div>
          </header>
          <main className="mx-auto w-full max-w-6xl px-4 py-10">
            {children}
          </main>
          <footer className="border-t border-[var(--border)]">
            <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-[var(--muted)]">
              © {new Date().getFullYear()} BOT Holdings
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
