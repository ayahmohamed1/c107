import type { Metadata } from 'next'
import giftData from '@/lib/giftData'
import GiftClient from '@/components/GiftClient'

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

export default function Home() {
  const data = giftData.ahmed || giftData.amir
  return <GiftClient data={data} />
}