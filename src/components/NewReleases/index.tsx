import { NewReleaseItem } from "@/types";
// redux
import { useGetWatchRecentEpisodesQuery } from "@/features/anime/animeApiSlice";
// components
import Mock from "@/components/Card/Mock";
import Card from "@/components/Card/Card";
import Skeleton from "@/components/Layout/Skeleton";
import CardSection from "@/components/Card/CardSection";
// hooks
import { useMock } from "@/hooks/useMock";

export default function NewReleases() {
    const { data, isLoading } = useGetWatchRecentEpisodesQuery(undefined);
    const { cards } = useMock(data);

    return (
        <CardSection title='New Releases'>
            {isLoading && <Skeleton count={6} width={192} height={288} />}
            {cards?.map((item: NewReleaseItem, idx) => (
                item.entry
                    ? <Card key={item.entry.mal_id} item={item.entry} />
                    : <Mock key={idx} />
            ))}
        </CardSection>
    );
}