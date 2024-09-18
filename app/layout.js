"use client";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <title>Future Volt | Best Electrical Services in your city!</title>
      <link
        rel="apple-touch-icon"
        href="favicon.ico"
        type="image/<generated>"
        sizes="<generated>"
      />
       <meta name="description" content="Expert electrician services for homes and businesses. Reliable, licensed, and affordable electricians available for installation, repair, and maintenance. Get a free estimate today!" />
        <meta name="keywords" content="electrician, electrical services, home electrician, commercial electrician, electrical repairs, electrical installation, wiring, electrical maintenance, licensed electrician" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Professional Electrician Services | Reliable & Affordable" />
        <meta property="og:description" content="Expert electrician services for homes and businesses. Reliable, licensed, and affordable electricians for all your electrical needs." />
        <meta property="og:image" content="https://cdn.pixabay.com/photo/2024/07/01/20/41/ai-generated-8866051_1280.jpg" />
        <meta property="og:url" content="https://uscout07.github.io/FutureVolt/" />
        <meta name="twitter:title" content="Professional Electrician Services | Reliable & Affordable" />
        <meta name="twitter:description" content="Need a trustworthy electrician? We provide top-rated electrical services at competitive rates. Contact us today!" />
        <meta name="twitter:image" content="https://cdn.pixabay.com/photo/2024/07/01/20/41/ai-generated-8866051_1280.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>

      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
