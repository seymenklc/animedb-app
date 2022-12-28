import { useGetWatchRecentEpisodesQuery } from "@/features/anime/animeApiSlice";
// components
import Card from "@/components/Card/Card";
import CardSection from "@/components/Card/CardSection";

export default function NewReleases() {
    const { data, isLoading, error } = useGetWatchRecentEpisodesQuery(undefined);

    return (
        <CardSection title='New Releases'>
            {data?.data.map(item => (
                <Card key={item.entry.mal_id} item={item.entry} />
            ))}
        </CardSection>
    );
}