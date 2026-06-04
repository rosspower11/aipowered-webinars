'use client'

import { useState } from 'react'
import { webinar } from '@/lib/webinar'

export default function WebinarFAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="faq">
      <div className="container-narrow">
        <p className="eyebrow anim">FAQ</p>
        <h2 className="white anim d1">Common questions</h2>
        <div className="faq-grid">
          {webinar.faq.map((f, i) => (
            <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
              <div className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                {f.q}
              </div>
              <div className="faq-a">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
