import { Fragment } from "react";
import { SingleAnime } from "@/types";
import { capitalizeFirstLetter } from "@/utils";

interface Props {
   anime?: SingleAnime;
}

const keys = ['type', 'score', 'rank', 'popularity', 'episodes', 'year', 'season', 'status', 'studios'];

function isAnAnimeProperty(str: string): str is keyof SingleAnime {
   return keys.includes(str);
}

export default function Statics({ anime }: Props) {
   return (
      <Fragment>
         <div className="flex flex-col gap-1 title text-lg">
            {keys.map(key => (
               <span key={key}>
                  {capitalizeFirstLetter(key)}:
               </span>
            ))}
         </div>
         <div className="flex flex-col gap-1 text-end">
            {keys.map((key: string) => {
               if (anime && isAnAnimeProperty(key) && anime[key] !== null) {
                  if (key === 'studios' && anime.studios.length > 0) {
                     return <span key={key}>{anime[key][0].name}</span>;
                  }
                  return <span key={key}>{anime[key]}</span>;
               }
               return <span key={key}>-</span>;
            })}
         </div>
      </Fragment>
   );
}