import { SingleAnime } from "@/types";
import BottomInfo from "./BottomInfo";
import TopInfo from "./TopInfo";

interface Props {
   anime?: SingleAnime;
}

export default function Statics({ anime }: Props) {
   return (
      <div className='flex-1 flex flex-col gap-3 px-1'>
         <TopInfo anime={anime} />
         <BottomInfo anime={anime} />
      </div>
   );
}