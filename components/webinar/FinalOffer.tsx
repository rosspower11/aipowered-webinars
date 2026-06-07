import { webinar } from '@/lib/webinar'
import WebinarForm from '@/components/webinar/WebinarForm'
import WebinarCTA from '@/components/webinar/WebinarCTA'

export default function FinalOffer() {
  const { finalOffer, form } = webinar
  return (
    <section className="final-offer">
      <div className="container-narrow" style={{ textAlign: 'center' }}>
        <h2 className="white anim">{finalOffer.title}</h2>
        <p className="sub sub-grey anim d1" style={{ margin: '0 auto 32px', maxWidth: '560px' }}>
          {finalOffer.body}
        </p>
        <WebinarCTA className="btn-white anim d2" />
      </div>
      <div className="container-narrow" id="register" style={{ marginTop: '56px' }}>
        <WebinarForm />
        <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '13px', color: 'rgba(255,255,255,0.35)', fontStyle: 'italic' }}>
          {form.footnote}
        </p>
      </div>
    </section>
  )
}
