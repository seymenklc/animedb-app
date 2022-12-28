import { SingleAnime } from "@/types";

interface Props {
   anime?: SingleAnime;
}

export default function TopInfo({ anime }: Props) {
   return (
      <div className='h-[180px]'>
         <h4 className='title text-slate-300 text-2xl'>Information</h4>
         <div className="flex gap-2">
            <div className="flex justify-between flex-1 text-slate-400 mt-1">
               <div className="flex flex-col">
                  <span>Type:</span>
                  <span>Episodes:</span>
                  <span>Season:</span>
                  <span>Status:</span>
                  <span>Studios:</span>
                  <span>Aired:</span>
               </div>
               <div className="flex flex-col text-end pr-3">
                  <span>{anime?.type}</span>
                  <span>{anime?.episodes}</span>
                  <span className="uppercase">{anime?.season}</span>
                  <span>{anime?.status}</span>
                  <span>{anime?.studios[0].name}</span>
                  <span>{anime?.aired.string}</span>
               </div>
            </div>
         </div>
      </div>
   );
}