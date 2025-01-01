import Navbar from '@/app/components/navbar';
import React from 'react';
import LoadingTicketCard from './components/loading-ticket-card';
import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <>
      <section
        id="Header"
        className="bg-[url('/assets/images/background/airplane.png')] bg-no-repeat bg-cover bg-left-top h-[290px] relative"
      >
        <div className="Header-content bg-gradient-to-r from-[#080318] to-[rgba(8,3,24,0)] h-[290px]">
          <Navbar />
          <div className="title container max-w-[1130px] mx-auto flex flex-col gap-1 pt-[50px] pb-[68px]">
            <h1 className="font-bold text-[32px] leading-[48px]">My Tickets</h1>
            <p className="font-medium text-lg leading-[27px]">
              <Skeleton className="w-[170px] bg-white h-[20px] rounded-md" />
            </p>
          </div>
          <div className="w-full h-[px] bg-gradient-to-t from-[#080318] to-[rgba(8,3,24,0)] absolute bottom-0" />
        </div>
      </section>

      <section
        id="Content"
        className="container max-w-[1130px] mx-auto flex justify-end -mt-[60px] pb-[100px] z-10 relative"
      >
        <div className="ticket-container flex flex-col w-[900px] gap-6">
          <LoadingTicketCard />
          <LoadingTicketCard />
          <LoadingTicketCard />
          <p className="self-center text-sm text-[#A0A0AC] h-fit w-fit">
            You’ve reached the end of results.
          </p>
        </div>
      </section>
    </>
  );
}
