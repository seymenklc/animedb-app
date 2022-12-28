import { SingleAnime, } from "@/types";
import { SiMyanimelist } from 'react-icons/si';

import Statics from "@/pages/Details/Information/Statics";
import Icons from "@/pages/Details/Information/Icons";
import AddToFavorites from "@/pages/Details/Information/AddToFavorites";

interface Props {
   anime?: SingleAnime;
}

export default function Information({ anime }: Props) {
   return (
      <div className="flex mt-5 px-4 lg:px-0 items-end lg:items-start">
         <div className='flex flex-col items-center sm:flex-row gap-3 flex-1'>
            <img
               className='h-96 w-60 rounded mb-10 lg:mb-0'
               src={anime?.images.webp.large_image_url}
            />
            <Statics anime={anime} />
         </div>
         {/* right menu */}
         <div className="w-10 hidden flex-col gap-3 justify-between items-center h-[360px] md:flex">
            <Icons streaming={anime?.streaming} link={anime?.url} />
            <div className="flex flex-col gap-5">
               <a href={anime?.url} target="_blank" className="icon ">
                  <SiMyanimelist className="icon scale-105 " />
               </a>
               <AddToFavorites anime={anime} />
            </div>
         </div>
      </div>
   );
}