import type { Metadata } from 'next'
import './globals.css'

const CDN = 'https://aipowered-assets.com'

export const metadata: Metadata = {
  metadataBase: new URL('https://webinar.aipowered.xyz'),
  title: 'ClaudeOS Replay | Watch the AI Powered event from last week',
  description: 'Great event last week. Watch the replay: the 5C framework that turns Claude from a chatbot into a business operating system, a live Skill build, and a self-assessment you can use immediately.',
  openGraph: {
    title: 'ClaudeOS Replay | Watch the AI Powered event from last week',
    description: 'Great event last week. Watch the replay: the 5C framework, a live Skill build, and a self-assessment you can use immediately.',
    images: [{ url: `${CDN}/web-preview-assets/claude-team-os-social-preview.png`, width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClaudeOS Replay | Watch the AI Powered event from last week',
    description: 'Great event last week. Watch the replay: the 5C framework, a live Skill build, and a self-assessment you can use immediately.',
    images: [`${CDN}/web-preview-assets/claude-team-os-social-preview.png`],
  },
  icons: {
    icon: `${CDN}/web-preview-assets/AiPowered_Submark_BlackBG_Small.jpg`,
    apple: `${CDN}/web-preview-assets/AiPowered_Submark_BlackBG_Small.jpg`,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
