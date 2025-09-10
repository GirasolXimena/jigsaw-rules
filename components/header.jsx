import Image from 'next/image';
import Link from 'next/link';
import jigsawRulesLogo from 'public/images/jigsaw_red_spiral.svg';
import githubLogo from 'public/images/github-mark-white.svg';
import { ENABLE_DEBUG_LOGS } from 'utils';

const devNavItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Revalidation', href: '/revalidation' },
    { linkText: 'Image CDN', href: '/image-cdn' },
    { linkText: 'Edge Function', href: '/edge' },
    { linkText: 'Blobs', href: '/blobs' },
    { linkText: 'Classics', href: '/classics' }
];
// | Home | The Rules | Trap Archive | Case Files | Community | Multimedia | Philosophy | About |
const prodNavItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'The Rules', href: '/rules' },
    { linkText: 'Trap Archive', href: '/trap-archive', disabled: true },
    { linkText: 'Case Files', href: '/case-files', disabled: true },
    { linkText: 'Community', href: '/community', disabled: true },
    { linkText: 'Multimedia', href: '/multimedia', disabled: true },
    { linkText: 'Philosophy', href: '/philosophy', disabled: true },
    { linkText: 'About', href: '/about', disabled: true }
];

let navItems = prodNavItems;
if (ENABLE_DEBUG_LOGS) {
    navItems.push(...devNavItems);
}
if (process.env.NODE_ENV === 'production') {
    navItems = navItems.filter((item) => !item.disabled);
}

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4 mt-6 mb-12 sm:mt-12 md:mb-24 py-2 px-1 bg-amber-950/50 backdrop-blur-sm border border-amber-950/10 rounded-lg shadow-lg">
            <Link className="max-w-12 text-shadow-lg bg-amber-950/20 p-0.5 rounded-full shadow-lg" href="/">
                <Image src={jigsawRulesLogo} alt="Jigsaw Rules logo" />
            </Link>
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} className="inline-flex px-1.5 py-1 sm:px-3 sm:py-2">
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
