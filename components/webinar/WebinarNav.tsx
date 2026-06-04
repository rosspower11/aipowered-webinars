import { webinar } from '@/lib/webinar'
import WebinarCTA from '@/components/webinar/WebinarCTA'

export default function WebinarNav() {
  const { brand } = webinar
  return (
    <nav className="nav">
      <div className="nav-logo">
        {brand.navLabel} <span>{brand.navSuffix}</span>
      </div>
      <div className="nav-actions">
        <WebinarCTA className="nav-cta">{webinar.cta.navLabel}</WebinarCTA>
      </div>
    </nav>
  )
}
