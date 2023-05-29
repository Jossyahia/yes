// Fix the problem for "search params object is empty in production with next 13 app dir"

// for more info "https://github.com/vercel/next.js/issues/43077"

export const dynamic = "force-dynamic"; // this is the fix

import Results from "@/components/Results";

export default async function Home(searchParams) {
  // const likes = searchParams.likes || "fetchTrending";

  const res = await fetch(
    `https://victorious-teal-school-uniform.cyclic.app/api`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data"); // this will be caught by the error page and passed to the page as props
  }

  const data = await res.json();

  const results = data;
  //const results.id = results._id;

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
