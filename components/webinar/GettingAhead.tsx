import { webinar } from '@/lib/webinar'
import WebinarCTA from '@/components/webinar/WebinarCTA'

export default function GettingAhead() {
  const { opportunity } = webinar
  return (
    <section className="ahead-section">
      <div className="container">
        <p className="eyebrow eyebrow-accent anim">{opportunity.eyebrow}</p>
        <h2 className="white anim d1">
          {opportunity.title.split('\n').map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </h2>
        {opportunity.paragraphs.map((p, i) => (
          <p
            key={i}
            className="sub sub-grey anim d2"
            style={{ maxWidth: '700px', marginBottom: i === opportunity.paragraphs.length - 1 ? '64px' : '16px' }}
          >
            {p}
          </p>
        ))}
        <div className="ahead-grid">
          {opportunity.stats.map((stat, i) => (
            <div key={i} className={`ahead-card anim d${i + 2}`}>
              <div className="ahead-number">{stat.display}</div>
              <div className="ahead-label">{stat.label}</div>
              <p className="ahead-detail">{stat.detail}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '48px' }} className="anim d4">
          <WebinarCTA className="btn-white" />
        </div>
      </div>
    </section>
  )
}
