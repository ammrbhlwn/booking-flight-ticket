type PlaneImageProps = {
    readonly src: string;
    readonly alt: string;
    readonly className?: string;
};

const PlaneImage = ({ src, alt, className = '' }: PlaneImageProps) => (
    <img src={src} className={className} alt={alt} />
);