import { webinar } from '@/lib/webinar'

export default function CohortPromo() {
  const { cohortPromo, cohort } = webinar
  return (
    <section className="cohort-promo" id="cohort">
      <div className="container-narrow">
        <h2 className="white anim">{cohortPromo.title}</h2>
        <p className="sub sub-grey anim d1">{cohortPromo.body}</p>
        <div className="section-cta anim d2">
          <a href={cohort.href} className="btn-outline" target="_blank" rel="noopener noreferrer">
            {cohort.label}
          </a>
        </div>
      </div>
    </section>
  )
}
