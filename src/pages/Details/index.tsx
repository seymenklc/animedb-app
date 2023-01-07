import { useParams } from 'react-router-dom';
import { useGetAnimeFullByIdQuery } from "@/features/anime/animeApiSlice";
// components
import Info from '@/pages/Details/Info';
import Trailer from '@/pages/Details/Trailer';
import Synopsis from '@/pages/Details/Synopsis';
import Populer from '@/pages/Details/Populer';
import AddToFavorites from '@/components/Elements/AddToFavorites';
// utils
import { disableAutoplay } from '@/utils';

export default function Details() {
    const { id } = useParams();
    const { data: single, isLoading } = useGetAnimeFullByIdQuery(id as string);

    const anime = single?.data;

    return (
        <div className='flex flex-col lg:flex-row gap-3 mt-8 px-5 overflow-x-hidden'>
            <div className='flex-1 flex flex-col gap-2'>
                <div className='items-center justify-between hidden sm:flex'>
                    <a href={anime?.url} target='_blank' >
                        <h1 className='title text-center md:text-start cursor-pointer'>{anime?.title}</h1>
                    </a>
                    {anime && <AddToFavorites payload={anime} />}
                </div>
                <Trailer
                    isLoading={isLoading}
                    url={disableAutoplay(anime?.trailer.embed_url)}
                />
                <Info anime={anime} />
                <Synopsis synopsis={anime?.synopsis} />
            </div>
            <Populer />
        </div>
    );
}