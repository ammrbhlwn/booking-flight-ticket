import React from 'react';
import LoadingSeatList from './loading-seat-list';
import { PlaneImages } from './PlaneImages';
import { SeatLegend } from './SeatLegend';

export const SeatSelectionPanel = () => (
    <div className="flex h-[calc(100vh-40px)] items-end">
        <div className="flex shrink-0 w-[409px] overflow-visible relative">
            <PlaneImages />
            <div className="flex flex-col gap-5 mb-[30px] px-[30px] w-full z-50">
                <SeatLegend />
                <LoadingSeatList />
            </div>
        </div>
    </div>
);