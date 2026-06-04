import { webinar } from '@/lib/webinar'
import WebinarCTA from '@/components/webinar/WebinarCTA'

export default function WhatYoullGet() {
  const { takeaways } = webinar
  return (
    <section className="what-you-get">
      <div className="container-narrow">
        <p className="eyebrow anim">{takeaways.eyebrow}</p>
        <h2 className="white anim d1">{takeaways.title}</h2>
        <div className="wyg-list">
          {takeaways.items.map((t, i) => (
            <div key={i} className={`wyg-item anim d${Math.min(i + 1, 4)}`}>
              <div className="wyg-num">{t.num}</div>
              <div>
                <h4>{t.title}</h4>
                <p>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '48px' }} className="anim d4">
          <WebinarCTA className="btn-white" />
        </div>
      </div>
    </section>
  )
}
