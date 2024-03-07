import "./globals.css";
import { Inter } from "next/font/google";
import Favicon from "@/public/favicon.ico";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  //viewport: "width=device-width, initial-scale=1",
  title: process.env.STORE_NAME,
  description: process.env.APP_DESCRIPTION,
  icons: [{ rel: "icon", url: Favicon.src }],
};
export const viewport = "width=device-width, initial-scale=1";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-background text-primary`}
      >
        <div
          style={{ backgroundColor: "#02031d" }}
          className="flex w-full fixed -z-10 h-full justify-center items-center shrink-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
          id="loading"
        >
          <Image
            src="/bg.jpg"
            width={100}
            height={100}
            className="w-[100%] h-[100%] shrink-0 mix-blend-screen blur-[10px]"
            alt=""
          />
        </div>
        {children}
      </body>
    </html>
  );
}
