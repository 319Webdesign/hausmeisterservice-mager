import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Marco Mager - Professioneller Hausmeisterservice',
  description: 'Professionelle Hausmeisterservices in Ihrer Region. Reparaturen, Wartung und Renovierung - schnell, zuverlässig und bezahlbar.',
  keywords: 'Hausmeister, Handwerker, Reparatur, Wartung, Renovierung',
  authors: [{ name: 'Marco Mager' }],
  openGraph: {
    title: 'Marco Mager - Hausmeisterservice',
    description: 'Professionelle Hausmeisterservices in Ihrer Region',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
