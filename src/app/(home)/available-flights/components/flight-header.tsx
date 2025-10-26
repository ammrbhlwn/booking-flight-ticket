'use client';

import React, { useContext } from 'react';
import { type FContext, FlightContext } from '../providers/flight-provider';
import LoadingFlightHeader from './loading-flight-header';

export default function FlightHeader() {
  const { flights, isLoading } = useContext(FlightContext) as FContext;

  let params = null;
  if (typeof globalThis !== 'undefined') {
    params = new URLSearchParams(globalThis.location.search);
  }
  const departure = params?.get('departure');
  const arrival = params?.get('arrival');

  if (isLoading) {
    return <LoadingFlightHeader />;
  }

  return (
    <>
      <h1 className="font-bold text-[32px] leading-[48px] w-fit">
        {departure && arrival
          ? `${departure} to ${arrival}`
          : 'Choose your airline'}
      </h1>
      <p className="font-medium text-lg leading-[27px] w-fit">
        {flights && flights?.length > 0
          ? `${flights.length} flights available`
          : 'No flights available'}
      </p>
    </>
  );
}
