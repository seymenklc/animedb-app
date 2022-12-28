import { Genre } from "@/types";

interface Props {
   genres?: Genre[];
}

export default function Genres({ genres }: Props) {
   return (
      <>
         <h4 className="text-center title text-base mt-1">Genres</h4>
         <ul className="flex items-center justify-center gap-2 mt-2 flex-wrap">
            {genres?.map(genre => (
               <li
                  className="px-4 py-1 bg-slate-600 rounded-full text-slate-100"
                  key={genre.mal_id}
               >
                  # {genre.name}
               </li>
            ))}
         </ul>
      </>
   );
}