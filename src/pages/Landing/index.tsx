// components
import Hero from "@/components/Hero/Hero";
import Cards from "@/components/Card/Cards";
import Characters from "@/components/Characters";

export default function Landing() {
    return (
        <div className="p-4">
            <Hero />
            <Cards />
            <Characters />
        </div>
    );
}