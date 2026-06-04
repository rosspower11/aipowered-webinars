import type { Metadata } from 'next'
import './globals.css'
import { webinar } from '@/lib/webinar'
import { getCDN } from '@/lib/cdn'

export const metadata: Metadata = {
  metadataBase: new URL('https://webinar.aipowered.xyz'),
  title: webinar.meta.title,
  description: webinar.meta.description,
  openGraph: {
    title: webinar.meta.title,
    description: webinar.meta.description,
    images: [{ url: getCDN(webinar.meta.ogImage), width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: webinar.meta.title,
    description: webinar.meta.description,
    images: [getCDN(webinar.meta.ogImage)],
  },
  icons: {
    icon: `${getCDN('web-preview-assets/AiPowered_Submark_BlackBG_Small.jpg')}`,
    apple: `${getCDN('web-preview-assets/AiPowered_Submark_BlackBG_Small.jpg')}`,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
