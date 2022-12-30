import { useState, useEffect } from 'react';
// redux
import { setQuery } from '@/features/search/searchSlice';
import { useAppDispatch } from '@/app/redux/hooks';
// icons
import { AiOutlineSearch } from 'react-icons/ai';
// components
import Search from '@/components/Layout/Navbar/Search';
import { useNavigate } from 'react-router-dom';

export default function Input() {
   const [search, setSearch] = useState('');
   const [open, setOpen] = useState(false);

   const navigate = useNavigate();
   const dispatch = useAppDispatch();

   const handleSearchItemClick = () => {
      setSearch('');
      dispatch(setQuery(''));
   };

   const handleBlur = () => {
      setTimeout(() => {
         setOpen(false);
      }, 200);
   };

   useEffect(() => {
      const keyDownHandler = (e: KeyboardEvent) => {
         if (e.key === 'Enter') {
            navigate('/search');
            return;
         };
      };

      dispatch(setQuery(search));

      document.addEventListener('keydown', keyDownHandler);

      return () => {
         document.removeEventListener('keydown', keyDownHandler);
      };
   }, [search, dispatch]);

   return (
      <div className='flex items-center w-screen px-10 md:w-auto md:px-0 relative'>
         <AiOutlineSearch className='icon -mr-6 scale-110' />
         <input
            type="text"
            placeholder='Search'
            value={search}
            onChange={e => setSearch(e.target.value)}
            onFocus={() => setOpen(true)}
            onBlur={handleBlur}
            className="bg-gray-700 rounded-md w-full lg:w-[180px] 
            border-none outline-none py-1 px-8 text-slate-200 
            md:focus-within:w-96 duration-500 ease-in-out focus-within:py-2"
         />
         {open && <Search handleSearchItemClick={handleSearchItemClick} />}
      </div>
   );
}