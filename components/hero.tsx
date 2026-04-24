'use client';

import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-neutral-50 to-neutral-100 py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight text-balance text-center md:text-left">
                Professioneller Hausmeisterservice für Ihren Frieden
              </h1>
              <p className="text-base md:text-lg text-neutral-600 leading-relaxed text-balance text-center md:text-left">
                Marco Mager bietet zuverlässige Hausmeister- und Handwerkservices. Von Reparaturen bis Renovierungen – wir kümmern uns um alles mit handwerklicher Qualität und persönlicher Betreuung.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition text-center"
              >
                Kostenlos anfragen
              </a>
              <a
                href="#services"
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition text-center"
              >
                Unsere Leistungen
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-neutral-600">Jahre Erfahrung</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-neutral-600">Zufriedene Kunden</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-neutral-600">Notfalleinsatz</div>
              </div>
            </div>
          </div>

          {/* Right Image Area */}
          <div className="relative h-96 md:h-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/hero-marco.jpg"
              alt="Marco Mager - Professioneller Hausmeister"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
