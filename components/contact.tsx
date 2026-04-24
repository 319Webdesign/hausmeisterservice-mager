'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8 text-center md:text-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 text-balance text-center md:text-left">
                Kontaktieren Sie uns
              </h2>
              <p className="text-lg text-neutral-600 text-balance">
                Haben Sie Fragen oder benötigen Sie ein unverbindliches Angebot? Wir freuen uns auf Ihre Nachricht!
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-3 gap-y-6 md:grid-cols-1 md:gap-y-6">
              <div className="flex flex-col items-center text-center gap-3 md:flex-row md:items-start md:gap-4 md:text-left min-w-0">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-100">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 text-center md:text-left">Telefon</h3>
                  <p className="text-neutral-600 mt-1">0151/72885736</p>
                  <p className="text-sm text-neutral-500">Mo-Fr 8:00 - 18:00 Uhr</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-3 md:flex-row md:items-start md:gap-4 md:text-left min-w-0">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-100">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 text-center md:text-left">Email</h3>
                  <p className="text-neutral-600 mt-1">MarcomagerHMS@web.de</p>
                  <p className="text-sm text-neutral-500">Antwort innerhalb 24h</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-3 md:flex-row md:items-start md:gap-4 md:text-left min-w-0">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-100">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 text-center md:text-left">Adresse</h3>
                  <p className="text-neutral-600 mt-1">Mühltal 87a</p>
                  <p className="text-neutral-600">56154 Boppard</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-3 md:flex-row md:items-start md:gap-4 md:text-left min-w-0">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-100">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 text-center md:text-left">Öffnungszeiten</h3>
                  <p className="text-neutral-600 mt-1">Montag - Freitag: 8:00 - 18:00 Uhr</p>
                  <p className="text-neutral-600">Samstag: 9:00 - 14:00 Uhr</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200 text-center md:text-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-neutral-900 mb-2 text-center md:text-left">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  placeholder="Ihr Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-neutral-900 mb-2 text-center md:text-left">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  placeholder="ihre@email.de"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-neutral-900 mb-2 text-center md:text-left">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  placeholder="+49 (0) 123 456789"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-neutral-900 mb-2 text-center md:text-left">
                  Service interessiert mich für *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                >
                  <option value="">Bitte wählen</option>
                  <option value="fenster">Fenster & Türen</option>
                  <option value="moebel">Möbel & Montage</option>
                  <option value="renovierung">Renovierung</option>
                  <option value="elektro">Elektro & Installation</option>
                  <option value="wartung">Wartung & Inspektion</option>
                  <option value="notfall">Notfalleinsätze</option>
                  <option value="sonstiges">Sonstiges</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-neutral-900 mb-2 text-center md:text-left">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                  placeholder="Beschreiben Sie Ihr Anliegen..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-orange-600 disabled:opacity-70 transition"
              >
                {status === 'loading' ? 'Wird gesendet...' : 'Anfrage senden'}
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                  Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen.
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                  Es gab einen Fehler beim Senden. Bitte versuchen Sie es später erneut.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
