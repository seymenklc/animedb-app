import { Genre } from "@/types";

interface Props {
   genres?: Genre[];
}

export default function Genres({ genres }: Props) {
   return (
      <div className="flex flex-col justify-between gap-4">
         <h4 className="title text-lg text-slate-300 text-center">Genres:</h4>
         <ul className="flex items-center justify-center gap-2 flex-wrap mb-8 sm:mb-0">
            {genres?.map(genre => (
               <li
                  key={genre.mal_id}
                  className="px-4 py-1 bg-slate-600 rounded-full text-base
                  cursor-pointer text-slate-100 hover:bg-slate-500 
                  hover:bg-opacity-50"
               >
                  # {genre.name}
               </li>
            ))}
         </ul>
      </div>
   );
}