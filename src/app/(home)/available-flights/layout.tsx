import React, { Suspense, type FC, type ReactNode } from 'react';
import QCProvider from './providers/query-provider';
import FlightProvider from './providers/flight-provider';
import LoadingFlightItem from './components/loading-flight-item';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <QCProvider>
      <Suspense fallback={<LoadingFlightItem />}>
        <FlightProvider>{children}</FlightProvider>
      </Suspense>
    </QCProvider>
  );
};

export default Layout;
