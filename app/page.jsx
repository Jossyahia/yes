// Fix the problem for "search params object is empty in production with next 13 app dir"
// for more info "https://github.com/vercel/next.js/issues/43077"
import Results from "./../components/Results";
//export const fetchCache = "auto";

//export const dynamic = "force-dynamic"; // this is the fix
export const metadata = {
  title: "Welcome to Fastfast Delivery Service",
};

export async function fetchdata() {
  const res = await fetch(
    `https://victorious-teal-school-uniform.cyclic.app/api`,
    { cache: "no-store" }
  );
  return res.json()
}

export default async function Home() {
const results = await fetchdata()
    return (
      <div>
        <Results results={results} />
      </div>
    );
  }

