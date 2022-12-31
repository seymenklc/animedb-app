import { Genre } from "@/types";
import { Link } from "react-router-dom";

interface Props {
   genre: Genre;
}

export default function GenreItem({ genre }: Props) {
   return (
      <Link to={`/genre/${genre.mal_id}`}>
         <li
            className="px-4 py-1 bg-slate-600 rounded-full text-base
         cursor-pointer text-slate-100 hover:bg-slate-500 
         hover:bg-opacity-50"
         >
            # {genre.name}
         </li>
      </Link>
   );
}