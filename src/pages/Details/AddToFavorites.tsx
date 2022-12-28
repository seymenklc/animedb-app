import { CgHeart } from 'react-icons/cg';
// redux
import { useAppDispatch } from '@/app/redux/hooks';
import { addFavorite } from '@/features/favorites/favoritesSlice';

import { SingleAnime } from '@/types';

interface Props {
   anime?: SingleAnime;
}

export default function AddToFavorites({ anime }: Props) {
   const dispatch = useAppDispatch();

   const handleClick = () => {
      dispatch(addFavorite({ ...anime }));
   };

   return <CgHeart
      onClick={handleClick}
      className="icon hover:text-red-500 cursor-pointer"
   />;
}