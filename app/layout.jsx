import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import localFont from 'next/font/local';

// Example of using a local font with next/font
const sawesomeFont = localFont({ src: '../styles/sawesome.woff2', display: 'swap', variable: '--font-sawesome' });

export const metadata = {
    title: {
        template: '%s | Jigsaw Rules',
        default: 'Jigsaw Rules'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className={`antialiased text-white bg-red-900 ${sawesomeFont.variable}`} >
                <div className="flex flex-col min-h-screen px-6 bg-noise sm:px-12">
                    <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                        <Header />
                        <main className="grow">{children}</main>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
