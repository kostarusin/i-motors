import React from 'react';
import '@/app/globals.css';
import { roboto } from '@/app/ui/fonts';
import Script from 'next/script';
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
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
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
        <div>
          <Header />
          {children}
          <Footer />
        </div>
        <Script
          src="https://cloud.ccm19.de/app.js?apiKey=4e10d00fe660c3fdbba07414f84807e00536e5d507b29245&amp;domain=66f591068532bcb55f055562&amp;lang=de_DE"
          referrerPolicy="origin"
        />
      </body>
    </html>
  );
}
