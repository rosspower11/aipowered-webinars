const items = [
  {
    title: 'The Personal OS Framework',
    desc: "See the complete 5C system that turns Claude from a chatbot into a business operating system. Not a teaser — the actual framework, end to end, so you understand exactly what's possible and where you currently sit.",
  },
  {
    title: 'A Live Skill Build',
    desc: 'Watch a Skill get built from scratch in real time. You\'ll see how a single Skill can standardise an output you currently do manually — and how that Skill becomes a permanent, reusable part of your OS.',
  },
  {
    title: 'The Three Pillars Assessment',
    desc: 'Walk away knowing exactly where you are across Standardisation, Optimisation, and Personalisation. Most people score high on one and zero on the other two. This is the gap the Accelerator closes.',
  },
  {
    title: 'The "CHAT vs OS" Mindset Shift',
    desc: 'The single biggest unlock: understanding the difference between using Claude as a tool and running Claude as a system. This reframe alone will change how you approach every interaction with AI.',
  },
  {
    title: 'The Accelerator Roadmap',
    desc: "If you want to build this yourself, you'll know exactly what to learn and in what order. If you want it built with guidance, you'll know exactly what the 6-week Accelerator delivers.",
  },
  {
    title: 'A Clear Next Step',
    desc: "Whether you go solo or join the Accelerator, you'll leave with a concrete action plan — not vague inspiration. You'll know exactly what to do on Monday morning.",
  },
]

export default function WhatYouLearn() {
  return (
    <section className="webinar-learn">
      <div className="container">
        <p className="eyebrow anim">What You Get From 60 Minutes</p>
        <h2 className="white anim d1">This Isn't a Teaser. It's a Transfer.</h2>
        <p className="sub sub-grey anim d2">
          Most webinars give you just enough to feel excited and not enough to do anything.
          This one delivers the full framework, a live build, and a self-assessment you can use immediately.
        </p>
        <div className="webinar-learn-grid">
          {items.map((item, i) => (
            <div key={i} className={`webinar-learn-card anim d${Math.min(i + 1, 4)}`}>
              <div className="webinar-learn-num">{String(i + 1).padStart(2, '0')}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
