import { webinar } from '@/lib/webinar'
import WebinarCountdown from '@/components/webinar/WebinarCountdown'
import WebinarForm from '@/components/webinar/WebinarForm'

export default function WebinarHero() {
  const { event, hero, form } = webinar
  return (
    <section className="webinar-hero">
      <div className="webinar-hero-inner">
        <div className="hero-eyebrow-wrap anim">
          <p className="hero-eyebrow">{event.eyebrow}</p>
          <p className="hero-eyebrow-sub">{event.eyebrowSub}</p>
        </div>

        <h1 className="anim d1">
          <span className="hero-line">{hero.line1}</span>
          <span className="hero-line hero-line-sub">{hero.line2}</span>
        </h1>

        <p className="webinar-hero-sub anim d2">{hero.sub}</p>

        <div className="hero-meta anim d2">
          <p className="hero-date">
            <strong>{event.dateLine}</strong>
            <span className="hero-date-sep"> · </span>
            {event.dateNote}
          </p>
          <WebinarCountdown />
          <ul className="hero-trust">
            {event.trustBar.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="hero-register anim d3" id="register">
          <WebinarForm />
          <p className="hero-form-note">{form.footnote}</p>
          <p className="hero-supporting">{event.underButton}</p>
        </div>
      </div>
    </section>
  )
}
