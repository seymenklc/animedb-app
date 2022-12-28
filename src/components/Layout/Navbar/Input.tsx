import { AiOutlineSearch } from 'react-icons/ai';

export default function Input() {
   return (
      <div className='flex items-center'>
         <AiOutlineSearch className='icon -mr-6 scale-110' />
         <input
            type="text"
            placeholder='Search'
            className="bg-gray-700 rounded-md w-[180px]
            border-none outline-none py-1 px-8 text-slate-200"
         />
      </div>
   );
}