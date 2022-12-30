import { Fragment } from "react";
import Skeleton from "@/components/Layout/Skeleton";

export default function Loader() {
   return (
      <Fragment>
         {Array(3).fill(0).map((_, idx) => (
            <div className="flex" key={idx}>
               <Skeleton count={1} width={80} height={112} />
               <div className="flex flex-col gap-3 ml-4">
                  <Skeleton count={1} width={120} height={20} />
                  <Skeleton count={1} width={150} height={20} />
                  <Skeleton count={1} width={200} height={20} />
               </div>
            </div>
         ))}
      </Fragment>
   );

}