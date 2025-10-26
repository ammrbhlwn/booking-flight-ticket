import { searchFlight } from "../(home)/lib/action";
import { DatePicker } from "./DatePicker";
import { SearchSelect } from "./SearchSelect";

interface SearchFormProps {
    departureCities: string[];
    arrivalCities: string[];
}

export function SearchForm({ departureCities, arrivalCities }: Readonly<SearchFormProps>) {
    return (
        <form
            className="bg-white text-flysha-black w-full flex justify-between items-center rounded-[20px] p-5"
            action={searchFlight}
        >
            <div className="flex gap-[50px] items-center p-5">
                <SearchSelect
                    name="departure"
                    label="Departure"
                    options={departureCities}
                    icon="/assets/images/icons/airplane.svg"
                />
                <hr className="border border-[#EDE8F5] h-[60px]" />
                <SearchSelect
                    name="arrival"
                    label="Arrival"
                    options={arrivalCities}
                    icon="/assets/images/icons/airplane.svg"
                />
                <hr className="border border-[#EDE8F5] h-[60px]" />
                <DatePicker />
            </div>
            <button
                type="submit"
                className="font-bold text-2xl leading-9 text-flysha-black text-center bg-flysha-light-purple rounded-[18px] p-[12px_30px] flex shrink-0 items-center h-[108px] transition-all duration-300 hover:shadow-[0_3px_20px_0_#B88DFF]"
            >
                Explore Now
            </button>
        </form>
    );
}