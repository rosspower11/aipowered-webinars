const cards = [
  {
    tag: 'Founders & Solopreneurs',
    title: "You're Doing Everything Yourself and Need Leverage",
    desc: "You wear every hat. You know AI could help but you haven't found a system that actually sticks. You need a framework, not another tool to try for a week and abandon.",
  },
  {
    tag: 'Consultants & Coaches',
    title: 'You Want to Productise Your Expertise With AI',
    desc: "You've got deep knowledge but your delivery is manual. You want to encode your standards into Skills so every output is consistent — whether you're serving 1 client or 10.",
  },
  {
    tag: 'Small Business Owners',
    title: "You've Played With AI But Never Built a Workflow",
    desc: "You've used Claude or ChatGPT for one-off tasks — rewriting emails, brainstorming ideas. But there's no system. Every conversation starts from zero. You know there's more.",
  },
  {
    tag: 'Career Professionals',
    title: 'You Want to Become the AI Person in Your Field',
    desc: "The people who build systems on AI will have an unfair advantage in every industry. This webinar shows you the framework. The Accelerator helps you build it.",
  },
]

export default function WebinarWhoFor() {
  return (
    <section className="who-section">
      <div className="container">
        <p className="eyebrow anim" style={{ color: 'var(--text-dark-grey)' }}>Who This Is For</p>
        <h2 className="dark anim d1">This Webinar Is For You If...</h2>
        <div className="who-grid">
          {cards.map((c, i) => (
            <div key={i} className={`who-card anim d${Math.min(i + 1, 4)}`}>
              <p className="who-card-tag">{c.tag}</p>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
