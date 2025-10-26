/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { SeatSelectionPanel } from './components/SeatSelectionPanel';
import LoadingFlightDetail from './components/loading-flight-detail';

export default function Loading() {
  return (
    <section
      id="Choose-Seat"
      className="container flex flex-col sm:flex-row items-center sm:items-start justify-between sm:w-[904px] pt-10 mx-auto sm:pb-0 min-h-screen"
    >
      <SeatSelectionPanel />
      <LoadingFlightDetail />
    </section>
  );
}