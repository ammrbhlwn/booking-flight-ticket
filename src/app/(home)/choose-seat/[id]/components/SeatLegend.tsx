import { SeatLegendItem } from "./SeatLegendItem";

type SeatLegend = {
    readonly color: string;
    readonly label: string;
    readonly border?: boolean;
};

const SEAT_LEGENDS: readonly SeatLegend[] = [
    { color: 'bg-flysha-light-purple', label: 'Selected' },
    { color: 'bg-flysha-dark-grey', label: 'Taken' },
    { color: 'bg-flysha-black', label: 'Available', border: true },
];

export const SeatLegend = () => (
    <div className="flex gap-[30px]">
        {SEAT_LEGENDS.map((legend) => (
            <SeatLegendItem key={legend.label} {...legend} />
        ))}
    </div>
);