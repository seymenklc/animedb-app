import { useParams } from 'react-router-dom';
import { useGetAnimeFullByIdQuery } from "@/features/anime/animeApiSlice";
// components
import Info from '@/pages/Details/Info';
import Trailer from '@/pages/Details/Trailer';
import Synopsis from '@/pages/Details/Synopsis';
import Populer from '@/pages/Details/Populer';
// utils
import { disableAutoplay } from '@/utils';
import AddToFavorites from '@/components/AddToFavorites';

export default function Details() {
    const { id } = useParams();
    const { data: single } = useGetAnimeFullByIdQuery(id as string);

    const anime = single?.data;

    return (
        <div className='flex flex-col lg:flex-row gap-3 mt-8 px-5 overflow-x-hidden'>
            <div className='flex-1 flex flex-col gap-2'>
                <div className='flex items-center justify-between'>
                    <h1 className='title text-center hidden sm:block md:text-start'>
                        {anime?.title}
                    </h1>
                    <AddToFavorites payload={anime} />
                </div>
                {anime?.trailer.embed_url && (
                    <Trailer url={disableAutoplay(anime.trailer.embed_url)} />
                )}
                <Info anime={anime} />
                <Synopsis synopsis={anime?.synopsis} />
            </div>
            <Populer />
        </div>
    );
}