import { webinar } from '@/lib/webinar'

export default function CohortPromo() {
  const { cohortPromo, cohort } = webinar
  return (
    <section className="cohort-promo" id="cohort">
      <div className="container-narrow">
        <p className="eyebrow eyebrow-accent anim">{cohortPromo.eyebrow}</p>
        <h2 className="white anim d1">{cohortPromo.title}</h2>
        <p className="sub sub-grey anim d2">{cohortPromo.body}</p>
        <p className="sub sub-grey anim d2" style={{ marginTop: '16px' }}>
          {cohortPromo.body2}
        </p>
        <p className="cohort-offer anim d3">{cohortPromo.offer}</p>
        <div style={{ textAlign: 'center', marginTop: '40px' }} className="anim d4">
          <a href={cohort.href} className="btn-outline" target="_blank" rel="noopener noreferrer">
            {cohort.label}
          </a>
        </div>
      </div>
    </section>
  )
}
