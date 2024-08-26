import React from 'react';
import '@/app/globals.css';
import { roboto } from '@/app/ui/fonts';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased flex min-h-screen flex-col p-6 container`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

// className = 'flex min-h-screen flex-col p-6';
