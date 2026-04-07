const items = [
  {
    title: 'The personal OS framework',
    desc: "You'll see the complete system, end to end. Not a teaser. The actual framework, so you understand what's possible and where you currently sit.",
  },
  {
    title: 'A live skill build',
    desc: "Watch a skill get built from scratch in real time. You'll see how one skill can replace a manual process you do every week.",
  },
  {
    title: 'The three pillars assessment',
    desc: "Find out exactly where you are across standardisation, optimisation, and personalisation. Most people score high on one and zero on the other two.",
  },
  {
    title: 'The mindset shift that changes everything',
    desc: "The difference between using Claude as a tool and running it as a system. This reframe alone will change how you approach AI from this point forward.",
  },
  {
    title: 'The accelerator roadmap',
    desc: "If you want to build this yourself, you'll know what to learn and in what order. If you want guidance, you'll know exactly what the 6-week programme delivers.",
  },
  {
    title: 'A clear next step',
    desc: "You'll leave with a concrete action plan. Not vague inspiration. You'll know exactly what to do on Monday morning.",
  },
]

export default function WhatYouLearn() {
  return (
    <section className="webinar-learn">
      <div className="container">
        <p className="eyebrow anim">What you get from 60 minutes</p>
        <h2 className="white anim d1">This isn't a teaser. It's a transfer.</h2>
        <p className="sub sub-grey anim d2">
          Most webinars give you just enough to feel excited and not enough to do anything.
          This one gives you the full framework, a live build, and something you can use straight away.
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
        <div style={{ textAlign: 'center', marginTop: '48px' }} className="anim d4">
          <a href="#register" className="btn-white">Claim your spot &middot; 23 April, 5pm UK</a>
        </div>
      </div>
    </section>
  )
}
