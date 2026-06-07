import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bominuel — Healthy. Flavorful. Unapologetically African.",
  description: "BomiNuel Zobo Hibiscus Drink — bold, balanced sweetness with a slow warmth of ginger and spice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-[#0d0d0d] text-white">
        {children}
      </body>
    </html>
  );
}