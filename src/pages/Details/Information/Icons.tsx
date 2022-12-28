import { Streaming } from "@/types";
// icons
import { SiCrunchyroll } from 'react-icons/si';
import { SiNetflix } from 'react-icons/si';
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
      </div>
   );
}