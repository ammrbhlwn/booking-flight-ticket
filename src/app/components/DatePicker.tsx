import Image from 'next/image';

export function DatePicker() {
    return (
        <div className="flex flex-col justify-center gap-[14px]">
            <label htmlFor="date" className="text-lg">
                Departure Date
            </label>
            <div className="flex gap-[10px]">
                <div className="flex items-center w-8 h-8 shrink-0">
                    <Image
                        width={32}
                        height={32}
                        src="/assets/images/icons/calendar.svg"
                        alt="icon"
                    />
                </div>
                <input
                    type="date"
                    name="date"
                    id="date"
                    className="relative font-semibold text-[22px] leading-[26.63px] w-[157px] bg-transparent focus:outline-none appearance-none [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0"
                />
            </div>
        </div>
    );
}
