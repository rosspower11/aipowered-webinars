export default function AcademicVsAccelerator() {
  return (
    <section className="webinar-academic">
      <div className="container">
        <p className="eyebrow anim" style={{ color: 'var(--text-dark-grey)' }}>The problem</p>
        <h2 className="dark anim d1">
          Tutorials teach features.<br />
          This teaches a system.
        </h2>
        <div className="webinar-academic-grid">
          <div className="webinar-academic-card anim d2">
            <p className="webinar-academic-tag">The usual approach</p>
            <h3>Learn AI</h3>
            <ul>
              <li>Watch tutorials about features</li>
              <li>Try prompts in isolation</li>
              <li>Every conversation starts from zero</li>
              <li>Different quality every time</li>
              <li>Knowledge that fades in a week</li>
            </ul>
          </div>
          <div className="webinar-academic-card webinar-academic-card--accent anim d3">
            <p className="webinar-academic-tag">The accelerator approach</p>
            <h3>Build a system</h3>
            <ul>
              <li>Build skills that encode your standards</li>
              <li>Same prompt, same answer, every time</li>
              <li>Context compounds across sessions</li>
              <li>Workflows that run without you</li>
              <li>Assets your business actually owns</li>
            </ul>
          </div>
        </div>
        <p className="webinar-academic-bottom anim d4">
          The gap between casual users and people who've built systems is getting wider every week.
          This webinar shows you which side you're on and how to cross over.
        </p>
      </div>
    </section>
  )
}
