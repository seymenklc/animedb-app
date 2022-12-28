import { Link } from 'react-router-dom';

interface Props {
    item: {
        image: string;
        title: string;
        mal_id: string;
    };
}

export default function Slide({ item }: Props) {
    return (
        <Link to={`/anime/${item.mal_id}`}>
            <img
                className="relative w-full h-[430px] object-cover
                group-hover:scale-105 transition-all duration-700
                ease-out"
                src={item.image}
                alt={item.title}
            />
            <div
                className='bg-gradient-to-r from-black/60 
                w-full h-full absolute bottom-0 group-hover:scale-105'
            />
            <h2
                className='text-3xl sm:flex sm:text-4xl px-10 py-2
                font-semibold absolute bottom-0 top-80 text-slate-200'
            >
                {item.title}
            </h2>
        </Link>
    );
}