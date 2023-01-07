type Props = {
   pageNums: number[];
   paginate: (num: number) => void;
};

export default function Pagination({ pageNums, paginate }: Props) {
   return (
      <ul className="inline-flex -space-x-px gap-2">
         {pageNums.map(num => (
            <li
               key={num}
               onClick={() => paginate(num)}
               className="btn px-3 py-2 leading-tight bg-slate-600 hover:bg-slate-500 
               rounded-sm text-white cursor-pointer"
            >
               {num}
            </li>
         ))}
      </ul>
   );
}