import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { Roboto } from "next/font/google";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: {
    default: "Task0 | Your AI task manager",
    template: "%s | Task0 | AI task manager",
  },
};

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "600", "800"] });

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html>
      <body className={`bg-azure text-shadow-neutral-800 ${roboto.className}`}>
        <Nav />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
