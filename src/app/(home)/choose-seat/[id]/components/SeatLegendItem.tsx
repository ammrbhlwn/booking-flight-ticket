import React from 'react';

type SeatLegendItemProps = {
    readonly color: string;
    readonly label: string;
    readonly border?: boolean;
};

export const SeatLegendItem = ({ color, label, border }: SeatLegendItemProps) => (
    <div className="flex items-center gap-[6px]">
        <div
            className={`w-[14px] h-[14px] flex shrink-0 rounded-full ${color} ${border ? 'border border-white' : ''
                }`}
        />
        <span className="font-semibold">{label}</span>
    </div>
);