import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

interface TestimonialCardProps {
    review: string;
    name: string;
    position: string;
    photo: string;
    rating: number;
}

export function TestimonialCard({ review, name, position, photo, rating }: Readonly<TestimonialCardProps>) {
    return (
        <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
            <p className="review leading-[30px] h-[90px] w-[305px]">{review}</p>
            <div className="flex">
                {Array.from({ length: rating }).map((_) => (
                    <Image
                        key={uuidv4()}
                        width={20}
                        height={20}
                        src="/assets/images/icons/Star.svg"
                        className="w-5 h-5"
                        alt="star"
                    />
                ))}
            </div>
            <div className="flex gap-4 items-center">
                <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                        width={50}
                        height={50}
                        src={photo}
                        className="w-full h-full object-cover"
                        alt="photo"
                    />
                </div>
                <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">{name}</p>
                    <p className="text-sm text-flysha-off-purple">{position}</p>
                </div>
            </div>
        </div>
    );
}