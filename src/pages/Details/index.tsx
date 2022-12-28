import { useParams } from 'react-router-dom';
import { useGetAnimeFullByIdQuery } from "@/features/anime/animeApiSlice";
// components
import Synopsis from '@/pages/Details/Synopsis';
import Populer from '@/pages/Details/Populer';
import Information from '@/pages/Details/Information';
// utils
import { disableAutoplay } from '@/utils';

export default function Details() {
    const { id } = useParams();
    const { data: single } = useGetAnimeFullByIdQuery(id as string);

    const anime = single?.data;

    return (
        <div className='flex flex-col lg:flex-row items-center gap-3 mt-8 px-5'>
            <div className='flex-1'>
                <h1 className='title'>{anime?.title}</h1>
                {anime?.trailer.embed_url && (
                    <iframe
                        src={disableAutoplay(anime.trailer.embed_url)}
                        allowFullScreen={false}
                        className='w-full h-[400px] mt-5 rounded-md shadow-md'
                    />
                )}
                <Information anime={anime} />
                <Synopsis synopsis={anime?.synopsis} />
            </div>
            <Populer />
        </div>
    );
}