import { Fragment } from "react";
import { SingleAnime } from "@/types";

interface Props {
   anime?: SingleAnime;
}

export default function Statics({ anime }: Props) {
   return (
      <Fragment>
         <div className="flex flex-col gap-1 title text-lg">
            <span>Type</span>
            <span>Score:</span>
            <span>Ranked:</span>
            <span>Populerity:</span>
            <span>Episodes:</span>
            <span>Season:</span>
            <span>Status:</span>
            <span>Studios:</span>
         </div>
         <div className="flex flex-col gap-1 text-end">
            <span>{anime?.type}</span>
            <span>{anime?.score}</span>
            <span>{anime?.rank}</span>
            <span>{anime?.popularity}</span>
            <span>{anime?.episodes}</span>
            <span>{anime?.season}</span>
            <span>{anime?.status}</span>
            <span>{anime?.studios[0].name}</span>
         </div>
      </Fragment>
   );
}