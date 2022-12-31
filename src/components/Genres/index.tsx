import GenreItem from "./GenreItem";
import type { Genre } from "@/types";

interface Props {
   genres?: Genre[];
}

export default function Genres({ genres }: Props) {
   return (
      <div className="flex flex-col justify-between gap-4">
         <h4 className="title text-lg text-slate-300 text-center">Genres:</h4>
         <ul className="flex items-center justify-center gap-2 flex-wrap mb-8 sm:mb-0">
            {genres?.map(genre => (
               <GenreItem key={genre.mal_id} genre={genre} />
            ))}
         </ul>
      </div>
   );
}