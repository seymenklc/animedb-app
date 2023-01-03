import { SingleAnime } from "@/types";
// redux
import { useGetTopAnimeQuery } from "@/features/anime/animeApiSlice";
// components
import Mock from "@/components/Card/Mock";
import Card from "@/components/Card/Card";
import Skeleton from "@/components/Layout/Skeleton";
import CardSection from "@/components/Card/CardSection";
// hooks
import { useMock } from "@/hooks/useMock";

export default function TopSeries() {
    const { data, isLoading } = useGetTopAnimeQuery(undefined);
    const { cards } = useMock(data);

    return (
        <CardSection title='Top Series'>
            {isLoading && <Skeleton count={6} width={192} height={288} />}
            {cards?.map((item: SingleAnime, idx) => (
                item.mal_id
                    ? <Card key={item.mal_id} item={item} />
                    : <Mock key={idx} />
            ))}
        </CardSection>
    );
}