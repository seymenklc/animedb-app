import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';
import { addFavorite, deleteFavorite, selectFavorites } from '@/features/favorites/favoritesSlice';
import { SingleAnime } from '@/types';
import { CgHeart } from 'react-icons/cg';
import Lottie from 'lottie-react';
import animationData from '@/assets/lotties/confeti.json';
import { useParams } from 'react-router-dom';

interface Props {
   payload?: SingleAnime;
   size?: number;
}

export default function AddToFavorites({ payload, size = 30 }: Props) {
   const { id } = useParams();

   const [isLiked, setIsLiked] = useState(false);
   const [clicked, setClicked] = useState(false);

   const favorites = useAppSelector(selectFavorites);

   const dispatch = useAppDispatch();

   const handleClick = () => {
      if (isLiked) {
         dispatch(deleteFavorite(payload?.mal_id));
         return;
      }

      setClicked(true);
      dispatch(addFavorite(payload));
   };

   useEffect(() => {
      favorites.find(item => item.mal_id === payload?.mal_id)
         ? setIsLiked(true) : setIsLiked(false);
   }, [favorites, id]);

   return (
      <div className='relative'>
         <CgHeart
            size={size}
            onClick={handleClick}
            className={`cursor-pointer text-slate-400 ${isLiked ? 'text-red-500' : ''}
            hover:text-red-500 transition duration-300 ease-in-out`}
         />
         {clicked && <Lottie
            loop={false}
            className='absolute -top-8 left-1/2 transform -translate-x-1/2'
            style={{ width: 120, height: 80 }}
            onComplete={() => setClicked(false)}
            animationData={animationData}
         />}
      </div>
   );
}