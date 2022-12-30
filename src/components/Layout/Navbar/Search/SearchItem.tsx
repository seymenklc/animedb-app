import { SingleAnime } from "@/types";
import { Link } from "react-router-dom";

interface Props {
   item: SingleAnime;
   handleSearchItemClick: () => void;
}

export default function SearchItem({ item, handleSearchItemClick }: Props) {
   return (
      <Link
         onClick={handleSearchItemClick}
         to={`/anime/${item.mal_id}`}
         className="flex bg-slate-800 p-3 rounded items-center"
      >
         <img
            className="w-20 h-28 rounded-md object-cover"
            src={item.images.webp.large_image_url}
            alt={item.title}
         />
         <div className="flex flex-col gap-3 ml-4">
            <h1 className="title text-base font-semibold text-slate-200">{item.title}</h1>
            <p className="text-sm text-slate-400">
               {item?.synopsis?.slice(0, 100)}
            </p>
         </div>
      </Link>
   );
}