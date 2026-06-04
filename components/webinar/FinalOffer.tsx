import { webinar } from '@/lib/webinar'
import WebinarForm from '@/components/webinar/WebinarForm'

export default function FinalOffer() {
  const { finalOffer, form } = webinar
  return (
    <section className="final-offer">
      <div className="container-narrow">
        <div className="final-offer-panel anim">
          <p className="final-offer-eyebrow">{finalOffer.eyebrow}</p>
          <h2>{finalOffer.title}</h2>
          <div className="final-offer-bullets">
            {finalOffer.bullets.map((b) => (
              <div key={b.h4} className="final-offer-bullet">
                <h4>{b.h4}</h4>
                <p>{b.p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container-narrow" id="register" style={{ marginTop: '48px' }}>
        <WebinarForm />
        <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '13px', color: 'rgba(255,255,255,0.35)', fontStyle: 'italic' }}>
          {form.footnote}
        </p>
      </div>
    </section>
  )
}
