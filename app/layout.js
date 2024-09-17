'use client';
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { useEffect } from 'react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}