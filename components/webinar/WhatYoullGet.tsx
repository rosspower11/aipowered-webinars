const takeaways = [
  {
    num: '01',
    title: 'Understand what is really happening with agentic AI',
    desc: 'Cut through the noise. Get a clear picture of where AI actually is right now, what agentic AI means in practice, and why this moment matters for your career and business.',
  },
  {
    num: '02',
    title: 'Be the smartest person in any room about Claude and AI',
    desc: "Walk away with the vocabulary, the framework, and the understanding that puts you ahead of 99% of people still treating AI like a search engine.",
  },
  {
    num: '03',
    title: 'Learn the building blocks to build your own operating system',
    desc: "See exactly how skills, projects, custom instructions, and knowledge bases connect into a single system. You'll understand the architecture, not just the features.",
  },
  {
    num: '04',
    title: 'Understand skills and how they are changing the world of work',
    desc: 'Skills are the core unit of a personal OS. One skill handles one domain. Together, they handle everything. Same prompt, same answer. That is what a system gives you.',
  },
  {
    num: '05',
    title: 'Understand how you could be the next AI expert in your field',
    desc: "The people who build systems on AI will have an unfair advantage in every industry. The replay shows you the path. You don't need to code. You need to build skills.",
  },
]

export default function WhatYoullGet() {
  return (
    <section className="what-you-get">
      <div className="container-narrow">
        <p className="eyebrow anim">What you'll walk away with</p>
        <h2 className="white anim d1">5 things you'll take home</h2>
        <div className="wyg-list">
          {takeaways.map((t, i) => (
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
          <a href="https://replay.aipowered.xyz/" target="_blank" rel="noopener noreferrer" className="btn-white">Watch the replay</a>
        </div>
      </div>
    </section>
  )
}
