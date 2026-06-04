import { getCDN } from '@/lib/cdn'
import { webinar } from '@/lib/webinar'
import WebinarCTA from '@/components/webinar/WebinarCTA'

export default function WebinarHero() {
  const { event, hero } = webinar
  const datePart = event.dateLine ? ` · ${event.dateLine}` : ''
  return (
    <section className="webinar-hero">
      <div className="webinar-hero-inner anim">
        <p className="hero-eyebrow">
          {event.eyebrow}
          {datePart}
        </p>
        <h1>
          {hero.headline.map((line, i) => (
            <span key={i}>
              {line}
              {i < hero.headline.length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p className="webinar-hero-sub">{hero.sub}</p>
        {event.dateFun ? <p className="hero-date anim">{event.dateFun}</p> : null}
        <div className="webinar-hero-proof">
          <img
            src={getCDN('ross-headshots/ross%20promise%20photo.png')}
            alt="Ross Power"
            className="webinar-hero-avatar"
          />
          <p>
            <strong>Ross Power</strong> {hero.proof}
          </p>
        </div>
        <WebinarCTA className="btn-white" />
        <p className="hero-supporting">{event.supporting}</p>
      </div>
    </section>
  )
}
