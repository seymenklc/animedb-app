import { CharacterType } from "@/types";

interface Props {
   item: CharacterType;
}

export default function Character({ item }: Props) {
   return (
      <div className="cursor-pointer relative group inline-block">
         <img
            src={item.images.webp.image_url}
            alt={item.name}
            className="md:w-72 md:h-96 w-52 h-72 rounded object-cover"
         />
         <div className="bg-gradient-to-t from-black/40 group-hover:from-black/70
          w-full h-full absolute bottom-0"
         >
            <span className="hidden title group-hover:block absolute bottom-0 left-0 p-4">
               {item.name}
            </span>
         </div>
      </div>
   );
}