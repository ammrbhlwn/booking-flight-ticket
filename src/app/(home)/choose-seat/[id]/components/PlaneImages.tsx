type PlaneImageProps = {
    readonly src: string;
    readonly alt: string;
    readonly className?: string;
};

const PlaneImage = ({ src, alt, className = '' }: PlaneImageProps) => (
    <img src={src} className={className} alt={alt} />
);

const PLANE_IMAGES = [
    {
        src: '../assets/images/background/plane-body.svg',
        alt: 'plane body',
        className: 'z-0',
    },
    {
        src: '../assets/images/background/plane-windshield.svg',
        alt: 'plane windshield',
        className: 'z-10 absolute transform -translate-x-1/2 left-1/2 top-[18px]',
    },
] as const;

export const PlaneImages = () => (
    <div className="plane-body absolute overflow-x-hidden sm:overflow-visible bottom-0">
        {PLANE_IMAGES.map((image) => (
            <PlaneImage key={image.alt} {...image} />
        ))}
        <div className="flex justify-center w-[927px] shrink-0 absolute transform -translate-x-1/2 left-[54%] bottom-0 -z-10">
            <PlaneImage
                src="../assets/images/background/plane-wings.svg"
                alt="plane wings"
                className="w-[927px]"
            />
        </div>
    </div>
);