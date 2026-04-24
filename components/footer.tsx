'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <Image
                src="/images/logo.png"
                alt="Marco Mager Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div>
                <div className="font-bold text-white text-sm">Marco Mager</div>
                <div className="text-primary font-bold text-xs">Hausmeisterservice</div>
              </div>
            </div>
            <p className="text-sm text-neutral-400">
              Professionelle Hausmeisterservices mit über 15 Jahren Erfahrung.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4 text-center md:text-left">Navigation</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-center md:block md:space-y-2 md:text-left">
              <li>
                <Link href="#services" className="hover:text-primary transition">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-primary transition">
                  Projekte
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary transition">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Impressum
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-4 text-center md:text-left">Leistungen</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-center md:block md:space-y-2 md:text-left">
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Fenster & Türen
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Möbel & Montage
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Renovierung
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Elektro & Installation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4 text-center md:text-left">Kontakt</h3>
            <div className="grid grid-cols-2 gap-3 text-sm md:block md:space-y-3">
              <div className="flex items-center justify-center gap-2 md:justify-start">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a href="tel:+49123456789" className="hover:text-primary transition">
                  +49 (0) 123 456789
                </a>
              </div>
              <div className="flex items-center justify-center gap-2 md:justify-start">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <a href="mailto:info@marco-mager.de" className="hover:text-primary transition">
                  info@marco-mager.de
                </a>
              </div>
              <div className="col-span-2 flex justify-center gap-4 mt-2 md:mt-4 md:justify-start">
                <a href="#" aria-label="Facebook" className="hover:text-primary transition">
                  <Facebook size={20} />
                </a>
                <a href="#" aria-label="Instagram" className="hover:text-primary transition">
                  <Instagram size={20} />
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:text-primary transition">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
            <p>&copy; {currentYear} Marco Mager Hausmeisterservice. Alle Rechte vorbehalten.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-primary transition">
                Datenschutz
              </Link>
              <Link href="#" className="hover:text-primary transition">
                Impressum
              </Link>
              <Link href="#" className="hover:text-primary transition">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
