import { AiOutlineSearch } from 'react-icons/ai';

export default function Input() {
   return (
      <div className='flex items-center w-screen px-10 md:w-auto md:px-0'>
         <AiOutlineSearch className='icon -mr-6 scale-110' />
         <input
            type="text"
            placeholder='Search'
            className="bg-gray-700 rounded-md w-full lg:w-[180px] 
            border-none outline-none py-1 px-8 text-slate-200
            md:focus-within:w-96 duration-500 ease-in-out focus-within:py-2"
         />
      </div>
   );
}