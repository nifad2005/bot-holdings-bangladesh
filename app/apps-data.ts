export type AppRecord = {
  id: string;
  slug: string;
  name: string;
  version?: string;
  category?: string;
  description?: string;
  icon_url?: string;
  download_url?: string;
  github_release_url?: string;
  file_size?: string;
  updated_at?: string;
};

const DEFAULT_APPS_JSON_URL =
  "https://raw.githubusercontent.com/nifad2005/BOT-App-Store/main/apps.json";

function getAppsJsonUrl() {
  return process.env.APPS_JSON_URL || DEFAULT_APPS_JSON_URL;
}

export async function fetchApps(): Promise<AppRecord[]> {
  const url = getAppsJsonUrl();

  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) {
    throw new Error(`Failed to fetch apps.json (${res.status})`);
  }

  const data = (await res.json()) as unknown;
  if (!Array.isArray(data)) return [];

  return data
    .filter((item): item is AppRecord => typeof item === "object" && !!item)
    .filter((app) => typeof app.slug === "string" && app.slug.length > 0);
}

export async function fetchAppBySlug(slug: string): Promise<AppRecord | null> {
  const apps = await fetchApps();
  return apps.find((a) => a.slug === slug) ?? null;
}

