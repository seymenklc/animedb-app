import { Fragment } from "react";
import { Link } from "react-router-dom";
// redux
import { useGetGenresQuery } from "@/features/anime/animeApiSlice";
// components
import Spinner from "@/components/Layout/Spinner";
import GenreItem from "@/components/Genres/GenreItem";

interface Props {
   setCurrentGenre: (genre: string) => void;
}

export default function TopBar({ setCurrentGenre }: Props) {
   const { data, isFetching } = useGetGenresQuery(undefined);

   return (
      <ul className="flex w-full overflow-y-hidden h-20 gap-3
       items-center scrollbar-thin scrollbar-track-slate-400
        scrollbar-thumb-slate-600">
         {isFetching && <div className="flex justify-center w-full"><Spinner /></div>}
         {!isFetching && (
            <Fragment>
               <Link to="/search" className="genre" onClick={() => setCurrentGenre('All')}>
                  All
               </Link>
               {data?.data.map(genre => (
                  <div
                     key={genre.mal_id}
                     className="flex-none"
                     onClick={() => setCurrentGenre(genre.name)}
                  >
                     <GenreItem genre={genre} />
                  </div>
               ))}
            </Fragment>
         )}
      </ul>
   );
}