/* eslint-disable @next/next/no-img-element */
import React from 'react';
import SeatList from './components/seat-list';
import FlightDetail from './components/flight-detail';
import { getFlightById } from '../../lib/data';
import { getUser } from '@/lib/auth';
import { ChooseSeatLayout } from './components/ChooseSeatLayout';
import { SeatSelectionLayout } from './components/SeatSelectionLayout';

type Params = {
  readonly id: string;
};

interface ChooseSeatProps {
  readonly params: Promise<Params>;
}

export default async function ChooseSeatPage({ params }: Readonly<ChooseSeatProps>) {
  const { session } = await getUser();
  const { id } = await params;
  const flight = await getFlightById(id);

  return (
    <ChooseSeatLayout
      leftPanel={
        <SeatSelectionLayout>
          {flight?.seats && <SeatList seats={flight.seats} />}
        </SeatSelectionLayout>
      }
      rightPanel={flight && <FlightDetail flight={flight} session={session} />}
    />
  );
}