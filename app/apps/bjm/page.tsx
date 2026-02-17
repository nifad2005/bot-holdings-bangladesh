import AppDetailsPage from "../[slug]/page";

export default function BjmPage() {
  return <AppDetailsPage params={Promise.resolve({ slug: "bjm" })} />;
}
