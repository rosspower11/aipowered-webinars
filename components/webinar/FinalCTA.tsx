import { webinar } from '@/lib/webinar'
import WebinarCTA from '@/components/webinar/WebinarCTA'

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container-narrow">
        <h2 className="white anim">One lunch break. One live landing page.</h2>
        <p className="sub sub-grey anim d1">
          Monday 22 June, 12:30pm BST. Free. Build With Me from blank screen to live URL, and leave knowing you can do it yourself.
        </p>
        <div className="section-cta anim d2">
          <WebinarCTA className="btn-white" />
        </div>
      </div>
    </section>
  )
}
