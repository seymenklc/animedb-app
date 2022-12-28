import ReadMoreReadLess from "@/components/ReadMoreReadLess";

interface Props {
   synopsis?: string;
}

export default function Synopsis({ synopsis }: Props) {
   return (
      <div className='cursor-default'>
         <h4 className='title mt-3 text-slate-300'>Synopsis</h4>
         <p className='text-justify mt-3 text-slate-400 leading-5 text-sm'>
            <ReadMoreReadLess limit={350}>
               {synopsis}
            </ReadMoreReadLess>
         </p>
      </div>
   );
}