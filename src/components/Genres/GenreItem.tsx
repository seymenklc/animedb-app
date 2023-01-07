import { Genre } from "@/types";
import { Link } from "react-router-dom";

interface Props {
   genre: Genre;
}

export default function GenreItem({ genre }: Props) {
   return (
      <Link className="flex-none" to={`/genre/${genre.mal_id}`}>
         <li className="genre"># {genre.name}</li>
      </Link>
   );
}