import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./components/Providers";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StudySync",
  description: "StudySync is a real-time online chat platform for academic discussions. Connect with learners worldwide, share insights, and collaborate on topics ranging from STEM to humanities—all in one intuitive space.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div
            className="flex flex-col justify-between relative"
            style={{ minHeight: "100dvh" }}
          >
            <Header />
            <div className="flex-grow p-4 sm:p-6">
              <div className="max-w-7xl m-auto w-full flex flex-col justify-start items-start">
                {children}
              </div>
            </div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
