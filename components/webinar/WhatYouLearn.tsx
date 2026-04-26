const items = [
  {
    title: 'The personal ClaudeOS framework',
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
    desc: "This is action-oriented. It's not view only. You learn through action. You'll understand how fast-paced accelerators and people building the future actually do things.",
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
        <h2 className="white anim d1">Startup-inspired. Action-oriented.<br />Built to move fast.</h2>
        <p className="sub sub-grey anim d2">
          This programme is inspired by the accelerator methodology from Y Combinator,
          Techstars and the programmes that built the unicorns you know today.
        </p>
        <p className="sub sub-grey anim d2" style={{ marginBottom: '8px' }}>
          Reapplied to Claude and AI. You don't sit and watch. You learn by doing.
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
          <a href="https://replay.aipowered.xyz/" target="_blank" rel="noopener noreferrer" className="btn-white">Watch the replay</a>
        </div>
      </div>
    </section>
  )
}
