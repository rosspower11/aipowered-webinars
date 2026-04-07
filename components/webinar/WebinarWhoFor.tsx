const cards = [
  {
    tag: 'Founders & solopreneurs',
    title: "You're doing everything yourself and need leverage",
    desc: "You wear every hat. You know AI could help but you haven't found a system that actually sticks. You need a framework, not another tool to try for a week and abandon.",
  },
  {
    tag: 'Consultants & coaches',
    title: 'You want to productise your expertise with AI',
    desc: "You've got deep knowledge but your delivery is manual. You want to encode your standards into skills so every output is consistent, whether you're serving 1 client or 10.",
  },
  {
    tag: 'Small business owners',
    title: "You've played with AI but never built a workflow",
    desc: "You've used Claude or ChatGPT for one-off tasks. Rewriting emails, brainstorming ideas. But there's no system. Every conversation starts from zero. You know there's more.",
  },
  {
    tag: 'Career professionals',
    title: 'You want to become the AI person in your field',
    desc: "The people who build systems on AI will have an unfair advantage in every industry. This webinar shows you the framework. The accelerator helps you build it.",
  },
]

export default function WebinarWhoFor() {
  return (
    <section className="who-section">
      <div className="container">
        <p className="eyebrow anim" style={{ color: 'var(--text-dark-grey)' }}>Who this is for</p>
        <h2 className="dark anim d1">This webinar is for you if...</h2>
        <div className="who-grid">
          {cards.map((c, i) => (
            <div key={i} className={`who-card anim d${Math.min(i + 1, 4)}`}>
              <p className="who-card-tag">{c.tag}</p>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '48px' }} className="anim d4">
          <a href="#register" className="btn-dark">Claim your spot &middot; 23 April, 5pm UK</a>
        </div>
      </div>
    </section>
  )
}
