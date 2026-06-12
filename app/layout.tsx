import type {Metadata} from 'next';
import './globals.css';
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { AtmosphereHUD } from "@/components/ui/AtmosphereHUD";
import { CustomCursor } from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Preloader from "@/components/ui/Preloader";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { ModeProvider } from "@/components/ModeProvider";
import { CapsuleToggle } from "@/components/ui/CapsuleToggle";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: 'Hariharan | Frontend Engineer',
  description: 'Portfolio of Hariharan A, Frontend Engineer.',
  other: {
    'darkreader-lock': 'true',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
          themes={['dark', 'purple', 'cyan']}
        >
          <ModeProvider>
            <Preloader />
            <AtmosphereHUD />
            <CustomCursor />
            <ThemeToggle />
            <CapsuleToggle />
            <SmoothScroll>
              {children}
            </SmoothScroll>
          </ModeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
