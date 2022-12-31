import { Link } from "react-router-dom";
import { Entry, SingleAnime } from "@/types";

interface Props {
    item: SingleAnime | Entry;
    height?: string;
    width?: string;
}

export default function Card({ item }: Props) {
    return (
        <Link to={`/anime/${item.mal_id}`} className='relative group inline-block'>
            <img
                style={{ borderRadius: '4px' }}
                src={item.images.webp.large_image_url}
                alt={item.title}
                className="h-56 w-48 sm:w-64 object-cover lg:h-72
                group-hover:scale-105 transition-all duration-200 ease-out"
            />
            <div
                className="bg-gradient-to-t from-black/60
                group-hover:from-black/40 w-full h-full 
                absolute bottom-0 group-hover:scale-105 
                transition-all duration-200 ease-out"
            />
        </Link>
    );
}