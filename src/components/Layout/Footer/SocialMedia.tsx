import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube } from "react-icons/ai";

export default function SocialMedia() {
  return (
    <div className="flex flex-row-reverse gap-4">
      <AiOutlineInstagram size={"2rem"} />
      <AiOutlineTwitter size={"2rem"} />
      <AiOutlineYoutube size={"2rem"} />
    </div>
  );
}
