// redux
import { useAppSelector } from "@/app/redux/hooks";
import { selectFavorites } from "@/features/favorites/favoritesSlice";
// components
import CardSection from '@/components/Card/CardSection';

export default function Favorites() {
    const favorites = useAppSelector(selectFavorites);

    return (
        <section className="app-container">
            <CardSection title="Favorites">
                {favorites.length > 0 && favorites.map(item => (
                    <div key={item.mal_id}>{item.title}</div>
                ))}
            </CardSection>
        </section>
    );
}