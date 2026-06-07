import { webinar } from '@/lib/webinar'

export default function WhyItMatters() {
  const { whyItMatters } = webinar
  return (
    <section className="why-section">
      <div className="container-narrow">
        <p className="eyebrow eyebrow-accent anim">{whyItMatters.eyebrow}</p>
        <h2 className="white anim d1">{whyItMatters.title}</h2>
        <p className="sub sub-grey anim d2" style={{ maxWidth: '720px', marginBottom: '48px' }}>
          {whyItMatters.intro}
        </p>
        <div className="why-blocks">
          {whyItMatters.blocks.map((block, i) => (
            <div key={block.title} className={`why-block anim d${Math.min(i + 1, 4)}`}>
              <h3>{block.title}</h3>
              <p>{block.body}</p>
            </div>
          ))}
        </div>
        <p className="why-closer anim d4">{whyItMatters.closer}</p>
      </div>
    </section>
  )
}
