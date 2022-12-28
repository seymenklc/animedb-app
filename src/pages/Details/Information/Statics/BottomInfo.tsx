import { SingleAnime } from "@/types";
import Genres from "./Genres";

interface Props {
   anime?: SingleAnime;
}

export default function BottomInfo({ anime }: Props) {
   return (
      <div className='h-[150px]'>
         <h4 className='title text-slate-300 text-2xl'>Statics</h4>
         <div className="flex gap-2">
            <div className="flex justify-between flex-1 text-slate-400 mt-1">
               <div className="flex flex-col">
                  <span>Score:</span>
                  <span>Ranked:</span>
                  <span>Populerity:</span>
               </div>
               <div className="flex flex-col text-end pr-3">
                  <span>{anime?.score}</span>
                  <span>{anime?.rank}</span>
                  <span>{anime?.popularity}</span>
               </div>
            </div>
         </div>
         <Genres genres={anime?.genres} />
      </div>
   );
}