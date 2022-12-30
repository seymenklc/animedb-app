import TopSeries from "@/components/TopSeries";
import NewReleases from "@/components/NewReleases";

export default function Cards() {
    return (
        <section className="mt-10">
            <NewReleases />
            <TopSeries />
        </section>
    );
}