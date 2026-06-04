import { webinar } from '@/lib/webinar'
import WebinarCTA from '@/components/webinar/WebinarCTA'

export default function WebinarWhoFor() {
  const { whoFor } = webinar
  return (
    <section className="who-section">
      <div className="container">
        <p className="eyebrow anim" style={{ color: 'var(--text-dark-grey)' }}>{whoFor.eyebrow}</p>
        <h2 className="dark anim d1">{whoFor.title}</h2>
        <div className="who-grid">
          {whoFor.cards.map((c, i) => (
            <div key={i} className={`who-card anim d${Math.min(i + 1, 4)}`}>
              <p className="who-card-tag">{c.tag}</p>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '48px' }} className="anim d4">
          <WebinarCTA className="btn-dark" />
        </div>
      </div>
    </section>
  )
}
