'use client';

/* eslint-disable @next/next/no-img-element */
import useCheckoutData from '@/hooks/useCheckoutData';
import { getUrlFile } from '@/lib/supabase';
import {
  type Checkout,
  CHECKOUT_KEY,
  dateFormat,
  rupiahFormat,
  SEAT_VALUES,
  type SeatValuesType,
} from '@/lib/utils';
import type { Airplane, Flight, FlightSeat } from '@prisma/client';
import React, { useContext, useMemo } from 'react';
import { SeatContext, type SeatContextType } from '../providers/seat-provider';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import type { Session } from 'lucia';
import { v4 as uuidv4 } from 'uuid';

type FlightProps = Flight & { seats: FlightSeat[]; plane: Airplane };

interface FlightDetailProps {
  flight: FlightProps;
  session: Session | null;
}

const InfoRow = ({ label, value }: { label: string; value: string | number | undefined }) => (
  <div className="flex justify-between">
    <span>{label}</span>
    <span className="font-semibold">{value}</span>
  </div>
);

export default function FlightDetail({ flight, session }: Readonly<FlightDetailProps>) {
  const data = useCheckoutData();
  const { toast } = useToast();
  const { seat } = useContext(SeatContext) as SeatContextType;
  const router = useRouter();

  const selectedSeat = useMemo(() => {
    return SEAT_VALUES[(data.data?.seat as SeatValuesType) ?? 'ECONOMY'];
  }, [data.data?.seat]);

  const departureTime = dateFormat(flight.departureDate, 'HH:mm');
  const arrivalTime = dateFormat(flight.arrivalDate, 'HH:mm');
  const formattedDate = dateFormat(flight.departureDate);
  const seatPrice = rupiahFormat(flight.price + selectedSeat.additionalPrice);

  const continueBook = () => {
    if (seat === null) {
      toast({
        title: 'Failed to checkout',
        description: 'Select seat first',
      });
      return;
    }

    if (session === null) {
      router.replace('/sign-in');
      return;
    }

    const checkoutData: Checkout = {
      id: data.data?.id,
      seat: data.data?.seat,
      flightDetail: flight,
      seatDetail: seat,
    };

    sessionStorage.setItem(CHECKOUT_KEY, JSON.stringify(checkoutData));
    router.push('/checkout');
  };

  return (
    <div className="flex flex-col items-center gap-[30px] mt-[61px] pb-[30px]">
      <h1 className="font-bold text-[32px] leading-[48px] text-center">
        {flight.departureCity} to {flight.destinationCity}
      </h1>

      <div className="flex flex-col items-center gap-[30px] w-[335px]">
        {/* Flight Time Info */}
        <div className="flex flex-col gap-[10px] w-full">
          <div className="flex justify-center shrink-0">
            <img src="../assets/images/icons/plane-dotted-curve.svg" alt="icon" />
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col gap-[2px] text-center">
              <p className="font-bold text-lg">{departureTime}</p>
              <p className="text-sm text-flysha-off-purple">{flight.departureCityCode}</p>
            </div>
            <div className="flex flex-col gap-[2px] text-center">
              <p className="font-bold text-lg">{arrivalTime}</p>
              <p className="text-sm text-flysha-off-purple">{flight.destinationCityCode}</p>
            </div>
          </div>
        </div>

        {/* Plane Info */}
        <div className="flex flex-col gap-4 w-full">
          <div className="flex shrink-0 w-full h-[130px] rounded-[14px] overflow-hidden">
            <img
              src={getUrlFile(flight.plane.image)}
              className="w-full h-full object-cover"
              alt="airplane"
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-[2px]">
              <p className="font-bold text-lg">{flight.plane.name}</p>
              <p className="text-sm text-flysha-grey">
                {flight.plane.code} • {selectedSeat.label} Class
              </p>
            </div>

            <div className="flex h-fit">
              {new Array(5).fill(0).map((_) => (
                <img
                  key={uuidv4()}
                  src="../assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Booking Info */}
        <div className="flex flex-col gap-[10px] w-full">
          <InfoRow label="Date" value={formattedDate} />
          <InfoRow label="Seat Choosen" value={seat?.seatNumber || '-'} />
          <InfoRow label="Passenger" value="1 Person" />
          <InfoRow label="Seat Price" value={seatPrice} />
        </div>

        <button
          type="button"
          onClick={continueBook}
          className="font-bold text-flysha-black bg-flysha-light-purple rounded-full h-12 w-full transition-all duration-300 hover:shadow-[0_3px_20px_0_#B88DFF] flex justify-center items-center"
        >
          Continue to Book
        </button>
      </div>
    </div>
  );
}
