import { webinar } from '@/lib/webinar'
import WebinarCTA from '@/components/webinar/WebinarCTA'

export default function BeforeYouJoin() {
  const { prep } = webinar
  return (
    <section className="who-section webinar-prep">
      <div className="container">
        <p className="eyebrow anim" style={{ color: 'var(--text-dark-grey)' }}>{prep.eyebrow}</p>
        <h2 className="dark anim d1">{prep.title}</h2>
        <p className="sub anim d2" style={{ maxWidth: '640px', marginBottom: '40px', color: 'var(--text-dark-grey)' }}>
          {prep.intro}
        </p>
        <div className="who-grid">
          {prep.items.map((item, i) => (
            <div key={i} className={`who-card anim d${Math.min(i + 1, 4)}`}>
              <p className="who-card-tag">Step {i + 1}</p>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
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
