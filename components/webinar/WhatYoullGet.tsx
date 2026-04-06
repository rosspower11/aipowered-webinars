const takeaways = [
  {
    num: '01',
    title: 'Understand What Is Really Happening With Agentic AI',
    desc: 'Cut through the noise. Get a clear picture of where AI actually is right now, what agentic AI means in practice, and why this moment matters for your career and business.',
  },
  {
    num: '02',
    title: 'Be the Smartest Person in Any Room About Claude and AI',
    desc: "Walk away with the vocabulary, the framework, and the understanding that puts you ahead of 99% of people still treating AI like a search engine.",
  },
  {
    num: '03',
    title: 'Learn the Building Blocks to Build Your Own Operating System',
    desc: "See exactly how Skills, Projects, Custom Instructions, and Knowledge Bases connect into a single system. You'll understand the architecture, not just the features.",
  },
  {
    num: '04',
    title: 'Understand Skills and How They Are Changing the World of Work',
    desc: 'Skills are the core unit of a Personal OS. One Skill handles one domain. Together, they handle everything. Same prompt, same answer. That is what a system gives you.',
  },
  {
    num: '05',
    title: 'Understand How You Could Be the Next AI Expert in Your Field',
    desc: "The people who build systems on AI will have an unfair advantage in every industry. This webinar shows you the path. You don't need to code. You need to build Skills.",
  },
]

export default function WhatYoullGet() {
  return (
    <section className="what-you-get">
      <div className="container-narrow">
        <p className="eyebrow anim">What You'll Walk Away With</p>
        <h2 className="white anim d1">5 Things You'll Take Home</h2>
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
      </div>
    </section>
  )
}
