import "@/styles/globals.css";
import { Quattrocento } from "next/font/google";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import { Navbar } from "@/components/shared/navbar";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/shared/footer";

export const metadata: Metadata = {
  title: "Online safari booking",
  description: "Book safari tickets for corbett, ranthambore and much more.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const font = Quattrocento({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn(font.className)} data-theme="light">
      <body>
        <Navbar />
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <Footer />
      </body>
    </html>
  );
}
