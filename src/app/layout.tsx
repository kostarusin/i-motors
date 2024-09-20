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
      <head>
        <title>I-MOTORS | Mietwerkstatt und Autoteile in Recklinghausen</title>
        <link rel="canonical" href="https://i-motors-werk.de/" />
        <meta
          name="description"
          content="I-MOTORS bietet dir alles, was du für dein Auto brauchst, aus einer Hand. Egal ob Mietwerkstatt, Autoteile oder Werkzeuge, wir haben alles, um dein Auto in Schuss zu halten."
        />
        <meta
          name="keywords"
          content="Mietwerkstatt, Autoteile, Werkzeuge, Auto Reparatur, Recklinghausen, Hebebühne"
        />
        <meta
          property="og:title"
          content="I-MOTORS - Mietwerkstatt und Autoteile"
        />
        <meta
          property="og:description"
          content="Alles für dein Auto in Recklinghausen - Mietwerkstatt, Werkzeuge, und mehr!"
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://i-motors-werk.de/" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
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
