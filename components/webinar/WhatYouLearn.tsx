import { webinar } from '@/lib/webinar'
import WebinarCTA from '@/components/webinar/WebinarCTA'

export default function WhatYouLearn() {
  const { learn } = webinar
  return (
    <section className="webinar-learn">
      <div className="container">
        <p className="eyebrow anim">{learn.eyebrow}</p>
        <h2 className="white anim d1">{learn.title}</h2>
        <div className="webinar-learn-grid">
          {learn.items.map((item, i) => (
            <div key={i} className={`webinar-learn-card anim d${Math.min(i + 1, 4)}`}>
              <div className="webinar-learn-num">{String(i + 1).padStart(2, '0')}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="learn-closer anim d4">{learn.closer}</p>
      </div>
    </section>
  )
}
