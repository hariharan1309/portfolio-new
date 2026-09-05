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
import { Analytics } from '@vercel/analytics/react';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });
const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'Hariharan | Frontend Engineer',
  description: 'Portfolio of Hariharan A, Frontend Engineer.',
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
          themes={['paper', 'dark', 'purple', 'cyan']}
        >
          <Preloader />
          <MangaNav />
          <AtmosphereHUD />
          <CustomCursor />
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
