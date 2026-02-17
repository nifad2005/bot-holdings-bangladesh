import { GET as downloadGet } from "../[slug]/route";

export async function GET(request: Request) {
  return downloadGet(request, { params: Promise.resolve({ slug: "bjm" }) });
}
