import { PlaneImages } from "./PlaneImages";
import { SeatLegend } from "./SeatLegend";

type SeatSelectionLayoutProps = {
    readonly children: React.ReactNode;
};

export const SeatSelectionLayout = ({ children }: SeatSelectionLayoutProps) => (
    <div className="flex h-[calc(100vh-40px)] items-end">
        <div className="flex shrink-0 w-[409px] overflow-visible relative">
            <PlaneImages />
            <div className="flex flex-col gap-5 mb-[30px] px-[30px] w-full z-50">
                <SeatLegend />
                {children}
            </div>
        </div>
    </div>
);