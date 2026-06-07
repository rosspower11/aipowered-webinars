import { webinar } from '@/lib/webinar'
import WebinarCTA from '@/components/webinar/WebinarCTA'

export default function AudiencePrep() {
  const { whoFor, prep } = webinar
  return (
    <section className="audience-section">
      <div className="container-narrow">
        <h2 className="dark anim">{whoFor.title}</h2>
        <p className="sub sub-dark anim d1">{whoFor.body}</p>

        <div className="prep-compact anim d2">
          <h3>{prep.title}</h3>
          <p className="prep-intro">{prep.intro}</p>
          <ul>
            {prep.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="prep-watch">{prep.watchNote}</p>
        </div>
        <div className="section-cta anim d3">
          <WebinarCTA className="btn-dark" />
        </div>
      </div>
    </section>
  )
}
