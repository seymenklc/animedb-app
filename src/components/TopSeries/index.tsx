import { useGetTopAnimeQuery } from "@/features/anime/animeApiSlice";
// components
import Card from "@/components/Card/Card";
import Skeleton from "@/components/Layout/Skeleton";
import CardSection from "@/components/Card/CardSection";

export default function TopSeries() {
    const { data, isLoading, error } = useGetTopAnimeQuery(undefined);

    return (
        <CardSection title='Top Series'>
            {isLoading && <Skeleton count={6} width={192} height={288} />}
            {data?.data.map(item => (
                <Card key={item.mal_id} item={item} />
            ))}
        </CardSection>
    );
}