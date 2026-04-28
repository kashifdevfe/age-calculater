import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://agecalculator.example.com'),
  title: {
    default: 'Age Calculator — Find Your Exact Age in Years, Months & Days',
    template: '%s | Age Calculator'
  },
  description: 'Free online age calculator. Enter your date of birth to instantly find your exact age in years, months, weeks, and days. 100% free, no signup needed.',
  keywords: [
    'age calculator',
    'how old am I',
    'age from date of birth',
    'calculate my age',
    'online age calculator',
    'age calculator free',
    'date of birth calculator',
    'exact age calculator',
    'age in years months days',
    'birthday age calculator'
  ],
  authors: [{ name: 'Age Calculator' }],
  creator: 'Age Calculator',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://agecalculator.example.com',
    siteName: 'Age Calculator',
    title: 'Age Calculator — Find Your Exact Age Instantly',
    description: 'Calculate your exact age in years, months, weeks, days, hours and minutes. Free online tool updated daily.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Age Calculator - Free Online Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Age Calculator — Find Your Exact Age Instantly',
    description: 'Calculate your exact age in years, months, weeks, and days for free.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE',
  },
  alternates: {
    canonical: 'https://agecalculator.example.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head suppressHydrationWarning>
        {/* Google AdSense — replace with your publisher ID */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
