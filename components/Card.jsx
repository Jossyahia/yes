import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

    //const results.id = results._id;

    
export default function Card({ result }) {
 // const results.id = results._id;

  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`store/${result._id}`}>
        <Image
          src={result.image}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="Item image is not available"
        ></Image>
        <div className="p-2">
          <p className="line-clamp-2 text-lg font-bold text-amber-600">{result.title}</p>
          <h2 className="truncate text-md">
            {result.description}
          </h2>
          <p className="flex items-center">
            {result.createdAt.substring(0, 10)}
            <FiThumbsUp className="h-5 mr-1 ml-3" /> {result.likes}
          </p>
        </div>
      </Link>
    </div>
  );
}
