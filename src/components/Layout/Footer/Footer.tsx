import ItemsContainer from "@/components/Layout/Footer/ItemsContainer";
import SocialMedia from "@/components/Layout/Footer/SocialMedia";

export default function Footer() {
  return (
    <footer className="app-container text-white flex justify-between
     py-5 px-4 h-40 sm:py-10 gap-4 sm:flex-row flex-col items-center cursor-default">
      <h1 className="title">AnimeDB</h1>
      <ItemsContainer />
      <SocialMedia />
    </footer>
  );
}
