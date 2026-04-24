'use client';

import Image from 'next/image';
import { CheckCircle, Wrench, Award } from 'lucide-react';

export function WhyUs() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Top Section: Image + Text */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden transition-shadow duration-300 hover:shadow-[0_30px_60px_rgba(0,0,0,0.25)]" style={{ boxShadow: '0 15px 45px rgba(0,0,0,0.2)' }}>
              <Image
                src="/images/why-us.jpg"
                alt="Hausmeisterservice Mager - Professionelle Arbeit"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Right: Heading and Text */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 text-center md:text-left">
                Wieso Hausmeisterservice Mager?
              </h2>
              
              <p className="text-lg text-neutral-600 leading-relaxed">
                Ihre Immobilie ist bei uns in den besten Händen. Während andere nur Standard bieten, setzen wir auf echte Instandhaltung und langlebige Lösungen. Ob klemmende Fenster oder die komplette Gartenpflege – wir kombinieren handwerkliches Geschick mit absoluter Zuverlässigkeit. Wir kommen, wenn wir es versprechen, und gehen erst, wenn alles perfekt sitzt.
              </p>
            </div>
          </div>

          {/* Bottom Section: 3 Features Centered */}
          <div className="grid md:grid-cols-3 gap-12 pt-8">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 uppercase tracking-wide">
                Zuverlässigkeit
              </h3>
              <p className="text-neutral-600">
                Wir halten unsere Versprechen und sind da, wenn Sie uns brauchen.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <Wrench className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 uppercase tracking-wide">
                Handwerk
              </h3>
              <p className="text-neutral-600">
                Professionelle Handwerkskunst und langjährige Erfahrung in jedem Projekt.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <Award className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 uppercase tracking-wide">
                Qualität
              </h3>
              <p className="text-neutral-600">
                Dauerhafte Lösungen, die über Jahre hinweg Bestand haben.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
