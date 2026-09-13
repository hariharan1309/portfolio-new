import type {Metadata} from 'next';
import './globals.css';
import { Geist, Bebas_Neue } from "next/font/google";
import { cn } from "@/lib/utils";
import { AtmosphereHUD } from "@/components/ui/AtmosphereHUD";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { MangaNav } from "@/components/ui/MangaNav";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Preloader from "@/components/ui/Preloader";
import { ThemeProvider } from "@/components/ThemeProvider";
import { PortfolioModeProvider } from "@/components/PortfolioModeProvider";
import { Analytics } from '@vercel/analytics/react';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });
const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'Hariharan A | Frontend & Mobile Engineer',
  description: 'Portfolio of Hariharan A, Frontend & Mobile Engineer specializing in Next.js, React Native, and on-device AI inference.',
  metadataBase: new URL('https://hari-haran-portfolio-fe.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Hariharan A | Frontend & Mobile Engineer',
    description: 'Crafting high-throughput web platforms and native mobile applications with Next.js, React Native, and on-device AI.',
    url: 'https://hari-haran-portfolio-fe.vercel.app',
    siteName: 'Hariharan A Portfolio',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hariharan A | Frontend & Mobile Engineer',
    description: 'Crafting high-throughput web platforms and native mobile applications with Next.js, React Native, and on-device AI.',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  other: {
    'darkreader-lock': 'true',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable, bebasNeue.variable)} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="paper"
          disableTransitionOnChange
          themes={['paper', 'dark']}
        >
          <PortfolioModeProvider>
            <Preloader />
            <MangaNav />
            <AtmosphereHUD />
            <CustomCursor />
            <SmoothScroll>
              {children}
            </SmoothScroll>
          </PortfolioModeProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
