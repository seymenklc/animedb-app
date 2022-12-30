// components
import Skeleton from "@/components/Layout/Skeleton";
import ReadMoreReadLess from "@/components/ReadMoreReadLess";

interface Props {
  synopsis?: string;
}

export default function Synopsis({ synopsis }: Props) {
  return (
    <>
      {!synopsis && (
        <div className="mt-3">
          <Skeleton count={1} height={150} />
        </div>
      )}
      {
        <div className="cursor-default px-8 sm:px-0">
          <h4 className="title mt-3 text-slate-300 text-center lg:text-start">
            Synopsis
          </h4>
          <p className="text-justify mt-3 text-slate-400 leading-5 text-base">
            <ReadMoreReadLess limit={350}>{synopsis}</ReadMoreReadLess>
          </p>
        </div>
      }
    </>
  );
}
