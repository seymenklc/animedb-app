import Skeleton from "@/components/Layout/Skeleton";

interface Props {
  url?: string;
}

export default function Trailer({ url }: Props) {
  return (
    <>
      {url && (
        <iframe
          src={url}
          allowFullScreen={false}
          className="w-full h-[400px] mt-5 rounded-md shadow-md"
        />
      )}
      {!url && <Skeleton count={1} height={400} />}
    </>
  );
}
