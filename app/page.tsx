import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { WhyUs } from '@/components/why-us';
import { Portfolio } from '@/components/portfolio';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen w-full min-w-0 max-w-full overflow-x-hidden bg-white">
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
