import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
import { ComparisonProvider } from "@/contexts/ComparisonContext";
import { CurrencyProvider } from "@/contexts/CurrencyContext";
import { SearchProvider } from "@/contexts/SearchContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BOLES Enterprise - Smart Home Devices Shop",
  description:
    "Shop the latest smart home devices, security cameras, smart lighting, and automation solutions from BOLES Enterprise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
        <body
          suppressHydrationWarning
          className="min-h-screen bg-background font-sans antialiased"
        >
          <CurrencyProvider>
            <AuthProvider>
              <SearchProvider>
                <ComparisonProvider>
                  <CartProvider>
                    <div className="relative flex min-h-screen flex-col">
                      {children}
                    </div>
                  </CartProvider>
                </ComparisonProvider>
              </SearchProvider>
            </AuthProvider>
          </CurrencyProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
