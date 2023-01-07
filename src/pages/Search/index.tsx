import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// redux
import { useGetAnimeByGenreQuery } from "@/features/anime/animeApiSlice";
// components
import TopBar from "@/pages/Search/TopBar";
import Skeleton from "@/components/Layout/Skeleton";
import GenreCards from "@/pages/Search/GenreCards";
import Pagination from "@/components/Elements/Pagination";
// hooks
import { usePagination } from "@/hooks/usePagination";

export default function Search() {
   const [currentGenre, setCurrentGenre] = useState<string>('All');

   const { id } = useParams();
   const { data, isFetching } = useGetAnimeByGenreQuery(id as string, {
      refetchOnMountOrArgChange: true
   });
   const { currentItems, pageNums, paginate } = usePagination(data?.data, 22);

   useEffect(() => {
      paginate(1);
   }, [currentGenre]);

   return (
      <div className="flex flex-col w-full gap-4">
         <TopBar setCurrentGenre={setCurrentGenre} />
         <section className="flex flex-col items-start ml-6">
            <h4 className="title text-center w-full">{currentGenre}</h4>
            <Pagination pageNums={pageNums} paginate={paginate} />
            <div className="flex flex-wrap justify-center items-center gap-5 my-5">
               {isFetching && <Skeleton count={22} width={192} height={288} />}
               <GenreCards items={currentItems} />
            </div>
            <Pagination pageNums={pageNums} paginate={paginate} />
         </section>
      </div>
   );
}  