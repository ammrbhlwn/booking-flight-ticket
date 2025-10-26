import Link from "next/link";

interface FooterLinksProps {
    readonly title: string;
    readonly links: readonly string[];
}

export function FooterLinks({ title, links }: FooterLinksProps) {
    return (
        <div className="flex flex-col gap-5">
            <p className="font-bold text-lg">{title}</p>
            {links.map((link) => (
                <Link
                    key={link}
                    href="#"
                    className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300"
                >
                    {link}
                </Link>
            ))}
        </div>
    );
}