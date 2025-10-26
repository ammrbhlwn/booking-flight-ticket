import Image from 'next/image';

interface ServiceCardProps {
    icon: string;
    title: string;
    description: string;
}

export function ServiceCard({ icon, title, description }: Readonly<ServiceCardProps>) {
    return (
        <div className="flex flex-col gap-[30px] w-[220px]">
            <div className="flex shrink-0 w-[70px] h-[70px] rounded-full items-center justify-center bg-flysha-light-purple">
                <Image width={35} height={35} src={icon} alt="icon" />
            </div>
            <div className="flex flex-col gap-1">
                <p className="font-bold text-2xl leading-[36px]">{title}</p>
                <p className="leading-[30px] text-flysha-off-purple">{description}</p>
            </div>
        </div>
    );
}