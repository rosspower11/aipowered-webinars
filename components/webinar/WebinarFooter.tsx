import { webinar } from '@/lib/webinar'

export default function WebinarFooter() {
  const { footer } = webinar
  return (
    <footer className="footer">
      <p>
        {footer.tagline} ·{' '}
        <a href={footer.link}>Ross Power</a>
        {' '}&middot; <em>Stop experimenting. Start operating with AI.</em>
      </p>
    </footer>
  )
}
