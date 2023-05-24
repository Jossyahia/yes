export const dynamic = "force-dynamic"; // this is the fix

import Results from "./../components/Results";
export async function fetchdata() {
  const res = await fetch(
    `https://victorious-teal-school-uniform.cyclic.app/api`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data"); // this will be caught by the error page and passed to the page as props
  }
  return res.json();
}

export default async function Home() {
  const results = await fetchdata();
  return (
    <div>
      <Results results={results} />
    </div>
  );
}
