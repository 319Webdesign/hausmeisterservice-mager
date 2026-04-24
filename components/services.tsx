'use client';

import { Wrench, Sofa, Zap, CheckCircle, Paintbrush, Trash2, Scissors, Flower, Droplet } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Instandhaltung Fenster, Türen & Rolläden',
  },
  {
    icon: Sofa,
    title: 'Möbelaufbau & Silikonarbeiten',
  },
  {
    icon: Zap,
    title: 'Montagearbeiten',
  },
  {
    icon: CheckCircle,
    title: 'Wartung von Fenstern & Türen',
  },
  {
    icon: Paintbrush,
    title: 'Renovierungsarbeiten',
  },
  {
    icon: Trash2,
    title: 'Entrümpelungen & Heckenschnitt',
  },
  {
    icon: Scissors,
    title: 'Rasenmähen & Laub entfernen',
  },
  {
    icon: Flower,
    title: 'Beet- & Grabpflege',
  },
  {
    icon: Droplet,
    title: 'Mülltonnen- & Winterdienst',
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-slate-900 text-white overflow-hidden">
      {/* Orange top border */}
      <div className="h-1 bg-primary"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left: Heading */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center lg:text-left">
              Unsere<br />
              <span className="text-primary">Leistungen</span>
            </h2>
          </div>

          {/* Right: Description */}
          <div className="pt-4">
            <p className="text-lg text-gray-300 leading-relaxed">
              Mit langjähriger Erfahrung und handwerklichem Know-how bieten wir umfassende Hausmeisterservices. Von Instandhaltung über Renovierung bis zur Außenpflege – wir kümmern uns zuverlässig um alle Belange rund um Ihr Haus.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16 pb-24">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="flex flex-col items-center text-center group">
                <div className="mb-6 transition-transform group-hover:scale-110">
                  <Icon className="w-16 h-16 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold text-gray-100 leading-snug">
                  {service.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>

      {/* Wavy bottom transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-auto block"
        >
          <path
            d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z"
            fill="white"
            stroke="none"
          />
        </svg>
      </div>
    </section>
  );
}
