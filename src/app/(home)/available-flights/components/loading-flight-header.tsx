import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

export default function LoadingFlightHeader() {
  return (
    <>
      <Skeleton className="w-[305px] h-[48px] bg-white rounded-lg" />
      <Skeleton className="w-[140px] h-[28px] bg-white rounded-lg" />
    </>
  );
}
