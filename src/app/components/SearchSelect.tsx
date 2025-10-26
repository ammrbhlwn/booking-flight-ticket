import Image from 'next/image';

interface SearchSelectProps {
    name: string;
    label: string;
    options: string[];
    icon: string;
}

export function SearchSelect({ name, label, options, icon }: Readonly<SearchSelectProps>) {
    return (
        <div className="flex flex-col justify-center gap-[14px]">
            <label htmlFor={name} className="text-lg">
                {label}
            </label>
            <div className="flex gap-[10px]">
                <div className="flex items-center w-8 h-8 shrink-0">
                    <Image width={32} height={32} src={icon} alt="icon" />
                </div>
                <select
                    name={name}
                    id={name}
                    className="font-semibold text-[22px] leading-[26.63px] appearance-none bg-[url(/assets/images/icons/arrow-down.svg)] bg-no-repeat bg-[right_1px] pr-[30px]"
                    defaultValue=""
                >
                    <option value="" disabled>
                        {label}
                    </option>
                    {options.map((city, key) => (
                        <option key={`${key}-${city}`} value={city}>
                            {city}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
