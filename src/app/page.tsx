import { headers } from 'next/headers';
import Header from './components/Header/Header';

export default function Home() {
  return (
    <main>
      <Header />
      <h1>i-motors {new Date().toTimeString()}</h1>
      <p>vercel deployment</p>
    </main>
  );
}
