import { SingleAnime, } from "@/types";

import Icons from "@/pages/Details/Icons";
import AddToFavorites from "@/pages/Details/AddToFavorites";

interface Props {
   anime?: SingleAnime;
}

export default function Information({ anime }: Props) {
   return (
      <div className="flex mt-5">
         <div className='flex gap-3 flex-1'>
            <img
               className='h-96 w-60 rounded'
               src={anime?.images.webp.large_image_url}
            />
            <div className='flex-1 flex flex-col gap-3 px-1'>
               <div className='h-[270px]'>
                  <h4 className='title text-slate-300 text-2xl'>Information</h4>

               </div>
               <div className='h-full'>
                  <h4 className='title text-slate-300 text-2xl'>Statics</h4>

               </div>
            </div>
         </div>
         <div className="w-10 flex flex-col gap-3 justify-between items-center h-[370px]">
            <Icons streaming={anime?.streaming} link={anime?.url} />
            <AddToFavorites anime={anime} />
         </div>
      </div>
   );
}