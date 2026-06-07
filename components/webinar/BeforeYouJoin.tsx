import { webinar } from '@/lib/webinar'
import WebinarCTA from '@/components/webinar/WebinarCTA'

export default function BeforeYouJoin() {
  const { prep } = webinar
  return (
    <section className="webinar-prep-section">
      <div className="container-narrow">
        <p className="eyebrow anim">{prep.eyebrow}</p>
        <h2 className="white anim d1">{prep.title}</h2>
        <p className="sub sub-grey anim d2" style={{ marginBottom: '32px' }}>
          {prep.intro}
        </p>
        <ol className="prep-list anim d3">
          {prep.items.map((item, i) => (
            <li key={i}>
              <span className="prep-num">{i + 1}</span>
              <span>{item.title}</span>
            </li>
          ))}
        </ol>
        <p className="prep-watch anim d3">{prep.watchNote}</p>
        <div style={{ textAlign: 'center', marginTop: '40px' }} className="anim d4">
          <WebinarCTA className="btn-white" />
        </div>
      </div>
    </section>
  )
}
