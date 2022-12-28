import { Genre } from "@/types";
import { Fragment } from "react";

interface Props {
   genres?: Genre[];
}

export default function Genres({ genres }: Props) {
   return (
      <Fragment>
         <h4 className="text-center title text-base mt-1">Genres</h4>
         <ul className="flex items-center justify-center gap-2 mt-2 flex-wrap">
            {genres?.map(genre => (
               <li
                  key={genre.mal_id}
                  className="px-4 py-1 bg-slate-600 rounded-full
                  cursor-pointer text-slate-100 hover:bg-slate-500"
               >
                  # {genre.name}
               </li>
            ))}
         </ul>
      </Fragment>
   );
}