// components
import Card from "@/components/Card/Card";
// redux
import { useGetWatchPopularEpisodesQuery } from "@/features/anime/animeApiSlice";

export default function Populer() {
   const { data: populerEpisodes } = useGetWatchPopularEpisodesQuery(undefined);

   return (
      <section>
         <h4 className='title mb-5 ml-4 cursor-default'>Populer Episodes</h4>
         <div className='flex gap-3 w-[400px] flex-wrap justify-center'>
            {populerEpisodes?.data.map(item => (
               <div key={item.entry.mal_id} className='w-44'>
                  <Card item={item.entry} />
               </div>
            ))}
         </div>
      </section>
   );
}