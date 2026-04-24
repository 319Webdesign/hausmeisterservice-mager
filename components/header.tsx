'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Marco Mager Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-neutral-900 text-sm">Marco Mager</span>
              <span className="text-primary font-bold text-xs">Hausmeisterservice</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-neutral-700 hover:text-primary transition">
              Leistungen
            </Link>
            <Link href="#portfolio" className="text-neutral-700 hover:text-primary transition">
              Projekte
            </Link>
            <Link href="#contact" className="text-neutral-700 hover:text-primary transition">
              Kontakt
            </Link>
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex">
            <a
              href="#contact"
              className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-700 transition"
            >
              Jetzt anfragen
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Navigation toggle"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <Link
              href="#services"
              className="text-neutral-700 hover:text-primary transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Leistungen
            </Link>
            <Link
              href="#portfolio"
              className="text-neutral-700 hover:text-primary transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Projekte
            </Link>
            <Link
              href="#contact"
              className="text-neutral-700 hover:text-primary transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </Link>
            <a
              href="#contact"
              className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-700 transition inline-block text-center"
              onClick={() => setIsOpen(false)}
            >
              Jetzt anfragen
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
