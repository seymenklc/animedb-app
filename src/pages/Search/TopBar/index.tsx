import { Fragment } from "react";
import { Link } from "react-router-dom";
// redux
import { useGetGenresQuery } from "@/features/anime/animeApiSlice";
// components
import Spinner from "@/components/Spinner";
import GenreItem from "@/components/Genres/GenreItem";

export default function TopBar() {
   const { data, isFetching } = useGetGenresQuery(undefined);

   return (
      <ul className="flex w-full overflow-y-hidden h-20 gap-3
       items-center scrollbar-thin scrollbar-track-slate-400
        scrollbar-thumb-slate-600">
         {isFetching && <div className="flex justify-center w-full"><Spinner /></div>}
         {!isFetching && (
            <Fragment>
               <Link to="/search" className="genre">All</Link>
               {data?.data.map(genre => (
                  <GenreItem genre={genre} key={genre.mal_id} />
               ))}
            </Fragment>
         )}
      </ul>
   );
}