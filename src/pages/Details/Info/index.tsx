import { SingleAnime } from "@/types";
// components
import Genres from "@/pages/Details/Info/Genres";
import Statics from "@/pages/Details/Info/Statics";
import Skeleton from "@/components/Layout/Skeleton";
import Loader from "@/pages/Details/Info/Loader";

interface Props {
  anime?: SingleAnime;
}

export default function Info({ anime }: Props) {
  return (
    <div className="flex flex-col items-center lg:items-stretch sm:flex-row h-max mt-6">
      {!anime && <Loader />}
      {anime && (
        <>
          <img
            className="mb-9 md:mb-0 h-96 w-60 rounded-md"
            src={anime?.images.webp.large_image_url}
          />
          <h2 className="title block sm:hidden mb-8 text-center">
            {anime?.title}
          </h2>
          <div className="flex-1 px-2 flex flex-col max-h-max justify-between gap-12 sm:gap-0">
            <div className="flex justify-between text-slate-400 text-lg pl-3">
              <Statics anime={anime} />
            </div>
            <Genres genres={anime?.genres} />
          </div>
        </>
      )}
    </div>
  );
}
