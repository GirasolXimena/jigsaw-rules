import Link from 'next/link';
import FooterMDX from 'content/footer.mdx';

export function Footer() {
    return (
        <footer className="pt-16 pb-12 sm:pt-24 sm:pb-16">
            <FooterMDX />
        </footer>
    );
}
