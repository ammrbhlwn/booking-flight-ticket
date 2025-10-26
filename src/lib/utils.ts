import type { Airplane, Flight, FlightSeat, TypeSeat } from '@prisma/client';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import dayjs from 'dayjs';

export type Checkout = {
  id?: string;
  seat?: TypeSeat;
  flightDetail?: Flight & { plane: Airplane };
  seatDetail?: FlightSeat;
};

export const CHECKOUT_KEY = 'CHECKOUT_KEY';

export const SEAT_VALUES = {
  ECONOMY: {
    label: 'Economy',
    additionalPrice: 0,
  },
  BUSINESS: {
    label: 'Business',
    additionalPrice: 500000,
  },
  FIRST: {
    label: 'First',
    additionalPrice: 750000,
  },
};

export type SeatValuesType = keyof typeof SEAT_VALUES;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateSeatPerClass = (flightId: string) => {
  const SEAT_CLASS: TypeSeat[] = ['ECONOMY', 'BUSINESS', 'FIRST'];
  const SEAT_CODE = ['A', 'B', 'C', 'D'];

  const seats: { seatNumber: string; type: TypeSeat; flightId: string }[] = [];

  for (const className of SEAT_CLASS) {
    for (const seat of SEAT_CODE) {
      for (let i = 1; i <= 5; i++) {
        seats.push({
          seatNumber: seat + i,
          type: className,
          flightId,
        });
      }
    }
  }

  return seats;
};

export const dateFormat = (
  date: Date | string,
  format = 'DD MMM YYYY HH:mm'
) => {
  if (!date) {
    return '';
  }

  const dateformat = dayjs(date).format(format);

  return dateformat;
};

export const rupiahFormat = (value: number) => {
  return Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(value);
};

// Type guards
const isPrimitive = (value: unknown): value is string | number | boolean => {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  );
};

const isSerializable = (value: unknown): value is Record<string, unknown> | unknown[] => {
  return typeof value === 'object' && value !== null;
};

export const objectToParams = (obj: Record<string, unknown>): string => {
  const queryParams = Object.entries(obj)
    .map(([key, value]) => {
      if (value === null || value === undefined) {
        return '';
      }

      if (isPrimitive(value)) {
        return `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`;
      }

      if (isSerializable(value)) {
        try {
          return `${encodeURIComponent(key)}=${encodeURIComponent(JSON.stringify(value))}`;
        } catch {
          return '';
        }
      }

      return '';
    })
    .filter((param) => param !== '')
    .join('&');

  return queryParams;
};

export const mappingSeats = (seats: FlightSeat[]) => {
  const totalSeatEconomy = seats.filter(
    (item) => item.type === 'ECONOMY'
  ).length;
  const totalSeatBusiness = seats.filter(
    (item) => item.type === 'BUSINESS'
  ).length;
  const totalSeatFirst = seats.filter((item) => item.type === 'FIRST').length;

  const economy = seats.filter(
    (item) => item.type === 'ECONOMY' && item.isBooked
  ).length;
  const business = seats.filter(
    (item) => item.type === 'BUSINESS' && item.isBooked
  ).length;
  const first = seats.filter(
    (item) => item.type === 'FIRST' && item.isBooked
  ).length;

  return {
    economy,
    business,
    first,

    totalSeatEconomy,
    totalSeatBusiness,
    totalSeatFirst,
  };
};

export function makeid(length: number) {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  const array = new Uint32Array(length);
  crypto.getRandomValues(array);

  for (let i = 0; i < length; i++) {
    result += characters[array[i] % characters.length];
  }

  return result;
}
