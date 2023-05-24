
import Results from "./../components/Results";
export async function fetchdata() {
  const res = await fetch(
    `https://victorious-teal-school-uniform.cyclic.app/api`,
    { cache: "no-store" }
  );
  return res.json();
}

export default async function Home() {
const results = await fetchdata()
    return (
      <div>
        <Results results={results} />
      </div>
    );
  }

