import { webinar } from '@/lib/webinar'
import WebinarCTA from '@/components/webinar/WebinarCTA'

export default function BottomCTA() {
  return (
    <section className="webinar-register" id="register">
      <div className="container-narrow">
        <p className="eyebrow eyebrow-accent anim">{webinar.event.eyebrow}</p>
        <h2 className="white anim d1">Ready to build your page live?</h2>
        <WebinarCTA className="btn-white" />
      </div>
    </section>
  )
}
