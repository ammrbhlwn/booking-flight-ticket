/* eslint-disable @next/next/no-img-element */
import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

interface SkeletonBarProps {
  width: number | string;
  height?: number;
  className?: string;
}

const SkeletonBar: React.FC<SkeletonBarProps> = ({ width, height = 5, className = '' }) => {
  const widthClass = typeof width === 'number' ? `w-[${width}px]` : `w-[${width}]`;
  const heightClass = `h-[${height}px]`;
  const skeletonClass = `bg-white ${widthClass} ${heightClass} ${className}`;

  return <Skeleton className={skeletonClass} />;
};

export default function LoadingFlightDetail() {
  return (
    <div className="flex flex-col items-center gap-[30px] mt-[61px] pb-[30px]">
      <SkeletonBar width={300} height={8} />
      <div className="flex flex-col items-center gap-[30px] w-[335px]">
        {/* Route info */}
        <div className="flex flex-col gap-[10px] w-full">
          <div className="flex justify-center shrink-0">
            <img src="../assets/images/icons/plane-dotted-curve.svg" alt="icon" />
          </div>
          <div className="flex justify-between">
            {[0, 1].map((_) => (
              <div key={uuidv4()} className="flex flex-col gap-[2px] text-center">
                <SkeletonBar width={60} height={5} />
                <SkeletonBar width={40} height={4} />
              </div>
            ))}
          </div>
        </div>

        {/* Flight card */}
        <div className="flex flex-col gap-4 w-full">
          <div className="flex shrink-0 w-full h-[130px] rounded-[14px] overflow-hidden">
            <Skeleton className="bg-white w-full h-full rounded-lg" />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-[2px]">
              <SkeletonBar width={100} height={5} />
              <SkeletonBar width={150} height={5} />
            </div>
            <div className="flex h-fit">
              {new Array(5).fill(0).map((_) => (
                <img key={uuidv4()} src="../assets/images/icons/Star.svg" className="w-5 h-5" alt="star" />
              ))}
            </div>
          </div>
        </div>

        {/* Flight details */}
        <div className="flex flex-col gap-[10px] w-full">
          {['Date', 'Seat Choosen', 'Passenger', 'Seat Price'].map((label) => (
            <div key={uuidv4()} className="flex justify-between">
              <span>{label}</span>
              <SkeletonBar width={60} />
            </div>
          ))}
        </div>

        <Skeleton className="w-full h-12 rounded-full" />
      </div>
    </div>
  );
}
