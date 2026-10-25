import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import giftData from '@/lib/giftData'
import GiftClient from '@/components/GiftClient'

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const data = giftData[params.id.toLowerCase()]
  if (!data) return { title: 'Gift Not Found' }
  
  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://agiftforuu.vercel.app')
    ),
    title: 'you got a mail!',
    description: 'open me!',
    openGraph: {
      title: 'you got a mail!',
      description: 'open me!',
      url: `https://agiftforuu.vercel.app/gift/${params.id.toLowerCase()}`,
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
}

export default function GiftPage({ params }: { params: { id: string } }) {
  const data = giftData[params.id.toLowerCase()]
  if (!data) return notFound()
  
  return <GiftClient data={data} />
}
