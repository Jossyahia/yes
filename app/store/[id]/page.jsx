"use client"
import Image from "next/image";
import { useSearchParams } from "next/navigation";


async function getMovie(_id) {
  const res = await fetch(
    `https://victorious-teal-school-uniform.cyclic.app/api/${_id}`,
    { next: { revalidate: 60 } }
  );
  return await res.json();
}

export default async function MoviePage({ useSearchParams }) {
  const _id = params.id;
  const result = await getMovie(_id);
  let shortTime = result.createdAt?.substring(0, 10);

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={result.image}
          width={500}
          height={300}
          className="rounded-lg"
          style={{
            maxWidth: "100%",
            height: "100%",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="Product Image"
        ></Image>
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold text-amber-600">
            {result.title}
          </h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1 text-amber-600">
              Product Description:
            </span>
            {result.description}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1 text-amber-600">Posted:</span>
            {shortTime}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1 text-amber-600">Likes:</span>
            {result.likes}
          </p>
        </div>
      </div>
    </div>
  );
}
