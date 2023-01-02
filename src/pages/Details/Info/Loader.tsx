import { Fragment } from "react";
// components
import Skeleton from "@/components/Layout/Skeleton";

export default function () {
  return (
    <Fragment>
      <div className="mb-9 md:mb-0 rounded-md">
        <Skeleton count={1} width={240} height={384} />
      </div>
      <div className="title block sm:hidden mb-8 text-center">
        <Skeleton count={1} width={260} height={54} />
      </div>
      <div className="flex-1 px-2 flex flex-col max-h-max justify-between gap-12 sm:gap-0">
        <div className="flex justify-between  text-slate-400 text-lg pl-3">
          <Skeleton count={1} width={570} height={384} />
        </div>
      </div>
    </Fragment>
  );
}
