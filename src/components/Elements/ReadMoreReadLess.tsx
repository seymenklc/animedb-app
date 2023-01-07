import { Fragment, ReactNode, useState } from "react";

interface Props {
   limit: number;
   children?: ReactNode & string;
}

export default function ReadMoreReadLess({ limit, children }: Props) {
   const [isReadMore, setIsReadMore] = useState(false);

   const toggle = () => {
      setIsReadMore(!isReadMore);
   };

   return (
      <Fragment>
         {isReadMore ? children : children?.slice(0, limit) + '...'}
         <button
            onClick={toggle}
            className='block px-2 py-1 border border-gray-400 mt-2
            mb-3 rounded text-xs hover:bg-gray-700 p-2 transition-all 
            duration-300 hover:text-slate-200'
         >
            {isReadMore ? "Read Less" : "Read More"}
         </button>
      </Fragment>
   );
}