import { useEffect } from "react";
// redux
import { useAppSelector } from "@/app/redux/hooks";
import { selectQuery } from "@/features/search/searchSlice";
import { useGetAnimeBySearchQuery } from "@/features/anime/animeApiSlice";
// components
import Loader from "@/components/Layout/Navbar/Search/Loader";
import SearchItem from "@/components/Layout/Navbar/Search/SearchItem";

interface Props {
   handleSearchItemClick: () => void;
}

export default function Search({ handleSearchItemClick }: Props) {
   const query = useAppSelector(selectQuery);

   const { data, isFetching, refetch } = useGetAnimeBySearchQuery(query, {
      refetchOnMountOrArgChange: true
   });

   useEffect(() => {
      const keyDownHandler = (e: KeyboardEvent) => {
         if (e.key === 'Enter') refetch();
      };

      document.addEventListener('keydown', keyDownHandler);

      return () => {
         document.removeEventListener('keydown', keyDownHandler);
      };
   }, [query]);

   return (
      <div className="bg-gray-700 mx-auto lg:w-96 absolute p-4 overflow-y-auto
     inset-x-0 lg:inset-x-auto lg:right-0 top-11 z-10 rounded-md flex flex-col 
     gap-4 h-96 scrollbar-thin scrollbar-track-slate-400 scrollbar-thumb-slate-600">
         {isFetching && <Loader />}
         {data?.data.map(item => (
            <SearchItem
               key={item.mal_id}
               item={item}
               handleSearchItemClick={handleSearchItemClick}
            />
         ))}
      </div>
   );
}