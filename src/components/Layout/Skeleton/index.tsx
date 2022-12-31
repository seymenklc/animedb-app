import { Fragment } from 'react';
import Skeleton from "react-loading-skeleton";

interface Props {
   count: number;
   height: number;
   width?: number;
}

const baseColor = "#404258";
const highlightColor = "#50577A";

export default function index({ count, height, width }: Props) {
   return (
      <Fragment>
         {Array(count).fill(0).map((_, idx) => (
            <Skeleton
               key={idx}
               height={height}
               width={width}
               baseColor={baseColor}
               highlightColor={highlightColor}
            />
         ))}
      </Fragment>
   );
}