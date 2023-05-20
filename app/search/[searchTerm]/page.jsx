
"use static"
import Results from "@/components/Results";

export default async function SearchPage({ params }) {
  const res = await fetch(
    `https://victorious-teal-school-uniform.cyclic.app/api`
  );

  if (!res.ok) {
    throw new Error("Error fetching data");
  }

  const data = await res.json();

  const results = data.results;
  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}

      {results && <Results results={results} />}
    </div>
  );
}
