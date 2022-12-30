// redux
import { useGetWatchRecentEpisodesQuery } from "@/features/anime/animeApiSlice";
// components
import Card from "@/components/Card/Card";
import Skeleton from "@/components/Layout/Skeleton";
import CardSection from "@/components/Card/CardSection";

export default function NewReleases() {
    const { data, isLoading, error } = useGetWatchRecentEpisodesQuery(undefined);

    return (
        <CardSection title='New Releases'>
            {isLoading && <Skeleton count={6} width={192} height={288} />}
            {data?.data.map(item => (
                <Card key={item.entry.mal_id} item={item.entry} />
            ))}
        </CardSection>
    );
}