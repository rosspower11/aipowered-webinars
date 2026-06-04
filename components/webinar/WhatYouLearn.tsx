import { webinar } from '@/lib/webinar'
import WebinarCTA from '@/components/webinar/WebinarCTA'

export default function WhatYouLearn() {
  const { learn } = webinar
  return (
    <section className="webinar-learn">
      <div className="container">
        <p className="eyebrow anim">{learn.eyebrow}</p>
        <h2 className="white anim d1">
          {learn.title.split('\n').map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </h2>
        <p className="sub sub-grey anim d2">{learn.intro}</p>
        <p className="sub sub-grey anim d2" style={{ marginBottom: '8px' }}>
          {learn.sub}
        </p>
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
        <div style={{ textAlign: 'center', marginTop: '48px' }} className="anim d4">
          <WebinarCTA className="btn-white" />
        </div>
      </div>
    </section>
  )
}
