import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import NavBar from "@/components/NavBar";
import "./globals.css";

const monteserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Metti Legal Services",
  description:
    "Discover Excellence in Legal Services - Metti Tadele Legal Services (MLS) is a premier corporate law office in Ethiopia, offering expert legal advisory across diverse business sectors. With a focus on corporate and commercial law, mergers & acquisitions, taxation, and more, we provide personalized solutions tailored to your unique business needs. Benefit from over a decade of experience, building strong partnerships for your business success. Contact us today for top-notch legal support in Ethiopia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${monteserrat.className} relative`}>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
