import { Roboto_Serif } from "next/font/google";
import { TRPCReactProvider } from "~/trpc/react";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";

import "~/styles/globals.css";
import Header from "~/components/Header";

// We're using a variable serif font.
// The serifs give a newspaper-like feel to the site,
// and it being a variable font is good for performance.
const font = Roboto_Serif({
  subsets: ["latin"],
  display: "swap"
});

export const metadata = {
  title: "Blog",
  description: "Enjoy our community posts, or write your own!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} w-screen`}>
        <ClerkProvider>
          <TRPCReactProvider>
            <Toaster />
            <Header />
            <main className="p-4 md:px-48 md:pt-12 lg:px-96 lg:pt-24">{children}</main>
          </TRPCReactProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
