import { webinar } from '@/lib/webinar'
import WebinarCTA from '@/components/webinar/WebinarCTA'
import WebinarCountdown from '@/components/webinar/WebinarCountdown'

export default function WebinarHero() {
  const { event, hero } = webinar
  return (
    <section className="webinar-hero">
      <div className="webinar-hero-inner anim">
        <p className="hero-eyebrow">{event.eyebrow}</p>
        <h1>
          {hero.headline.map((line, i) => (
            <span key={i}>
              {line}
              {i < hero.headline.length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p className="webinar-hero-sub">{hero.sub}</p>
        <p className="hero-date-bar">{event.dateBar}</p>
        <WebinarCountdown />
        <WebinarCTA className="btn-white" />
        <p className="hero-supporting">{event.underButton}</p>
      </div>
    </section>
  )
}
