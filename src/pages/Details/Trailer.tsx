import { Fragment } from "react";
// components
import Skeleton from "@/components/Layout/Skeleton";

interface Props {
  url?: string;
  isLoading: boolean;
}

export default function Trailer({ url, isLoading }: Props) {
  return (
    <Fragment>
      {isLoading && <Skeleton count={1} height={400} />}
      {!isLoading && url && (
        <iframe
          src={url}
          allowFullScreen={false}
          className="w-full h-[400px] mt-5 rounded-md shadow-md"
        />
      )}
    </Fragment>
  );
}
