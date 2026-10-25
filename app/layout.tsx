import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://agiftforuu.vercel.app')
  ),
  title: 'you got a mail!',
  description: 'open me!',
  openGraph: {
    title: 'you got a mail!',
    description: 'open me!',
    url: 'https://agiftforuu.vercel.app',
    siteName: 'Birthday Gift',
    type: 'website',
    images: [
      {
        url: 'https://agiftforuu.vercel.app/images/og-mail.jpg',
        secureUrl: 'https://agiftforuu.vercel.app/images/og-mail.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'you got a mail! - open me!',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'you got a mail!',
    description: 'open me!',
    images: ['https://agiftforuu.vercel.app/images/og-mail.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Nunito:wght@300;400;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,400;1,600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
