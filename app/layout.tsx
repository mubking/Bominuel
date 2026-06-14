import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from './context/CartContext';

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
   <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}