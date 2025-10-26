import Image from 'next/image';

interface SelectiveCardProps {
    thumbnail: string;
    title: string;
    subtitle: string;
}

export function SelectiveCard({ thumbnail, title, subtitle }: Readonly<SelectiveCardProps>) {
    return (
        <div className="flex flex-col gap-5">
            <div className="rounded-[30px] h-[310px] overflow-hidden">
                <Image
                    width={260}
                    height={310}
                    src={thumbnail}
                    className="w-full h-[310px] object-cover"
                    alt="thumbnail"
                />
            </div>
            <div className="flex gap-[14px] items-center">
                <div className="flex shrink-0 w-8 h-8">
                    <Image
                        width={32}
                        height={32}
                        src="/assets/images/icons/crown-white.svg"
                        className="w-8 h-8"
                        alt="icon"
                    />
                </div>
                <div className="flex flex-col gap-[2px]">
                    <p className="font-bold text-lg">{title}</p>
                    <p className="text-flysha-off-purple">{subtitle}</p>
                </div>
            </div>
        </div>
    );
}