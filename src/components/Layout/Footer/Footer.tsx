import ItemsContainer from "@/components/Layout/Footer/ItemsContainer";
import SocialMedia from "@/components/Layout/Footer/SocialMedia";

export default function Footer() {
  return (
    <footer className="bg-transparent app-container text-white 
    flex justify-between mx-auto w-full py-5 sm:py-0 gap-4 sm:flex-row 
    flex-col px-4 h-52 border-t-2 items-center">
      <h1 className="title">AnimeDB</h1>
      <ItemsContainer />
      <SocialMedia />
    </footer>
  );
}
