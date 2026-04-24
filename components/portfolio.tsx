'use client';

import Image from 'next/image';

const projects = [
  {
    id: 2,
    title: 'Möbelaufbau & Montage',
    category: 'Möbelaufbau & Silikonarbeiten',
    image: '/images/moebel-aufbau.jpg',
    isRealImage: true,
    description: 'Professioneller Aufbau von Schlafmöbeln mit Stauraum und Lattenrosten'
  },
  {
    id: 3,
    title: 'Heckenarbeiten & Heckenschnitt',
    category: 'Entrümpelungen & Heckenschnitt',
    image: '/images/hecken-schnitt.jpg',
    isRealImage: true,
    description: 'Professioneller Heckenschnitt und Landschaftsgestaltung'
  },
  {
    id: 4,
    title: 'Rasenmähen & Laub entfernen',
    category: 'Rasenmähen & Laub entfernen',
    image: '/images/rasenmaehen.jpg',
    isRealImage: true,
    description: 'Professionelle Rasenmäharbeiten mit gepflegtem Schnittbild'
  },
  {
    id: 5,
    title: 'Silikonarbeiten & Dichtungen',
    category: 'Möbelaufbau & Silikonarbeiten',
    image: '/images/silikonarbeiten.jpg',
    isRealImage: true,
    description: 'Professionelle Silikonarbeiten und Fensterabdichtungen'
  },
  {
    id: 6,
    title: 'Küchenaufbau & Montage',
    category: 'Montagearbeiten',
    image: '/images/montagearbeiten.jpg',
    isRealImage: true,
    description: 'Professionelle Küchenmontage mit modernen Schränken und Arbeitsplatte'
  },
  {
    id: 7,
    title: 'Schneeräumung & Winterdienst',
    category: 'Mülltonnen- & Winterdienst',
    image: '/images/winterdienst.jpg',
    isRealImage: true,
    description: 'Professionelle Schneeräumung und Winterdienste für sichere Wege'
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 text-balance">
            Unsere Referenzen
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto text-balance">
            Schauen Sie sich einige unserer erfolgreich abgeschlossenen Projekte an
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden border border-neutral-200 hover:shadow-xl transition cursor-pointer"
            >
              <div className="aspect-square bg-gradient-to-br from-orange-100 to-teal-100 flex items-center justify-center text-6xl group-hover:scale-110 transition overflow-hidden">
                {project.isRealImage ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  project.image
                )}
              </div>
              <div className="p-6">
                <div className="text-sm text-primary font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2 text-center md:text-left">
                  {project.title}
                </h3>
                <p className="text-neutral-600 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
