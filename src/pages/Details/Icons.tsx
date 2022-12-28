import { Streaming } from "@/types";
// icons
import { SiMyanimelist } from 'react-icons/si';
import { SiCrunchyroll } from 'react-icons/si';
import { SiNetflix } from 'react-icons/si';
// components
import { Funimation } from "@/components/Elements/Icons/Funimation";

interface Props {
   link?: string;
   streaming?: Streaming[];
}

const iconArr = [
   { name: 'Crunchyroll', icon: <SiCrunchyroll /> },
   { name: 'Funimation', icon: <Funimation /> },
   { name: 'Netflix', icon: <SiNetflix /> },
];

export default function Icons({ streaming, link }: Props) {
   return (
      <div className="flex flex-col gap-8">
         {streaming?.map((el, idx) => {
            if (el.name === 'Crunchyroll' || 'Netflix' || 'Funimation') {
               return (
                  <a key={el.name} href={el.url} className="icon" target='_blank'>
                     {iconArr[idx]?.icon}
                  </a>
               );
            }
         })}
         <a href={link} target="_blank" className="icon mt-2">
            <SiMyanimelist className="icon scale-105 " />
         </a>
      </div>
   );
}