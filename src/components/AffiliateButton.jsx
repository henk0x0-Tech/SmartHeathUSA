import { ArrowRight, ExternalLink } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function AffiliateButton({
    hopLink,
    className
}) {
    return (
        <a
            href={hopLink}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className={twMerge(clsx(
                "group inline-flex flex-col items-center justify-center",
                "bg-brand-dark hover:bg-brand-tealDark text-white",
                "px-10 py-4 rounded-xl",
                "font-bold text-lg",
                "shadow-xl shadow-brand-dark/20 hover:shadow-2xl",
                "transition-all duration-300 transform hover:-translate-y-1 active:scale-95",
                "w-full sm:w-auto cursor-pointer select-none",
                "focus:outline-none focus:ring-4 focus:ring-brand-teal/30",
                className
            ))}
            aria-label="Check Official Website (Opens in new tab)"
        >
            <div className="flex items-center gap-2.5">
                <span>Check Official Website</span>
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </div>
            <span className="text-xs font-medium opacity-80 mt-1 flex items-center gap-1">
                Opens in a new tab <ExternalLink size={10} />
            </span>
        </a>
    );
}
