import React from 'react';
import '@/app/globals.css';
import { roboto } from '@/app/ui/fonts';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Example from './components/Example';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {/* <Example /> */}
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

//className={`${roboto.className} antialiased flex min-h-screen flex-col container mx-auto p-6 `}
