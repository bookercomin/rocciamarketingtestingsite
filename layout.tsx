import type { Metadata } from 'next'
import { Inter, Syne } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Roccia Marketing — Build a brand people remember.',
  description: 'From strategy setup to all out marketing campaigns, we help businesses stand out and scale.',
  openGraph: {
    title: 'Roccia Marketing',
    description: 'Modern marketing agency helping SMBs grow through SEO, Paid Ads, Social Media, and AI Automation.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="bg-[#0D1030] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
