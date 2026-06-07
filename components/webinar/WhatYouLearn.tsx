import { webinar } from '@/lib/webinar'

export default function WhatYouLearn() {
  const { learn } = webinar
  return (
    <section className="webinar-learn">
      <div className="container-narrow">
        <h2 className="white anim">{learn.title}</h2>
        <ol className="learn-stack anim d1">
          {learn.items.map((item, i) => (
            <li key={item.title}>
              <span className="learn-num">{i + 1}</span>
              <div>
                <strong>{item.title}.</strong> {item.desc}
              </div>
            </li>
          ))}
        </ol>
        <p className="learn-closer anim d2">{learn.closer}</p>
      </div>
    </section>
  )
}
