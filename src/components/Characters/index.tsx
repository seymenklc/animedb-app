import { Fragment } from "react";
// components
import Skeleton from '@/components/Layout/Skeleton';
import Character from "@/components/Characters/Character";
// redux
import { useGetTopCharactersQuery } from "@/features/anime/animeApiSlice";

export default function Characters() {
   const { data, isLoading } = useGetTopCharactersQuery(undefined);

   return (
      <Fragment>
         <h3 className="title text-center lg:text-left mb-8">Top Characters</h3>
         <div className="flex justify-center gap-8 flex-wrap">
            {isLoading && <Skeleton count={4} width={288} height={384} />}
            {data?.data.map(item => (
               <Character key={item.mal_id} item={item} />
            ))}
         </div>
      </Fragment>
   );
}