import type { Metadata, Viewport } from 'next'
import { Inter, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
  weight: ['400', '500', '600', '700', '800']
});

export const metadata: Metadata = {
  title: 'Eureka Industries | Construction Company KZN | Civil Engineering & Infrastructure',
  description: 'Eureka Industries is a leading civil engineering, construction, and project management company in KwaZulu-Natal. ClearVu Fencing, Infrastructure Development, Cleaning Services. Delivered on time, on budget.',
  keywords: 'Construction Company KZN, Civil Engineering KZN, ClearVu Fencing KZN, Cleaning Services KZN, Infrastructure Development South Africa, Project Management Construction KZN',
  openGraph: {
    title: 'Eureka Industries | Construction Company KZN',
    description: 'Building KwaZulu-Natal\'s Future with Precision, Strength & Innovation. Civil Engineering, Construction, Project Management & Cleaning Services.',
    type: 'website',
    locale: 'en_ZA',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#C00000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSans.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
