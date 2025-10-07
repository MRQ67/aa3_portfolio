import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { ProjectProvider } from "@/contexts/ProjectContext";
import { DesignProvider } from "@/contexts/DesignContext";
import { Inter, JetBrains_Mono, DM_Sans, Italiana } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from '@vercel/analytics/next';
import AppShell from "@/components/AppShell";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-ubuntu-mono", // Keep the same variable name for consistency
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const italiana = Italiana({
  variable: "--font-italiana",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

// Import Sarina font as a local font
const sarina = localFont({
  src: "../../public/fonts/Sarina-Regular.ttf",
  variable: "--font-sarina",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdellah - Developer & Designer",
  description: "Portfolio website of Abdellah, a Developer and Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${dmSans.variable} ${jetBrainsMono.variable} ${italiana.variable} ${sarina.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ProjectProvider>
            <DesignProvider>
              <AppShell>
                {children}
              </AppShell>
            </DesignProvider>
          </ProjectProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
