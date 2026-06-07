import { webinar } from '@/lib/webinar'
import WebinarCTA from '@/components/webinar/WebinarCTA'

export default function WhyItMatters() {
  const { whyItMatters } = webinar
  return (
    <section className="why-section">
      <div className="container-narrow">
        <h2 className="white anim">{whyItMatters.title}</h2>
        <p className="sub sub-grey anim d1">{whyItMatters.intro}</p>
        <div className="why-grid">
          {whyItMatters.blocks.map((block, i) => (
            <div key={block.title} className={`why-card anim d${Math.min(i + 1, 4)}`}>
              <h3>{block.title}</h3>
              <p>{block.body}</p>
            </div>
          ))}
        </div>
        <p className="why-closer anim d4">{whyItMatters.closer}</p>
        <div className="section-cta anim d4">
          <WebinarCTA className="btn-white" />
        </div>
      </div>
    </section>
  )
}
