import type { FlightSeat } from '@prisma/client';
import React, { createContext, useMemo, useState, type FC, type ReactNode } from 'react';

interface SeatProviderProps {
  children: ReactNode;
}

export type SeatContextType = {
  seat: FlightSeat | null;
  setSelectedSeat: (seat: FlightSeat) => void;
};

export const SeatContext = createContext<SeatContextType | null>(null);

const SeatProvider: FC<SeatProviderProps> = ({ children }) => {
  const [seat, setSeat] = useState<FlightSeat | null>(null);

  const setSelectedSeat = (seat: FlightSeat) => {
    setSeat(seat);
  };

  const value = useMemo(() => ({ seat, setSelectedSeat }), [seat]);

  return (
    <SeatContext.Provider value={value}>
      {children}
    </SeatContext.Provider>
  );
};

export default SeatProvider;
