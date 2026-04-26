export default function FinalOffer() {
  return (
    <section className="final-offer">
      <div className="container-narrow">
        <div className="final-offer-panel anim">
          <p className="final-offer-eyebrow">Great event last week</p>
          <h2>Understand the building blocks of Claude and start your journey in just 60 minutes</h2>
          <div className="final-offer-bullets">
            <div className="final-offer-bullet">
              <h4>Immediate clarity</h4>
              <p>Walk in unsure about AI. Walk out with the complete 5C framework, a self-assessment, and a concrete action plan you can use Monday morning.</p>
            </div>
            <div className="final-offer-bullet">
              <h4>Learn by doing</h4>
              <p>Watch a real skill get built live. Understand how the building blocks of Claude connect into a system. Leave knowing exactly how to start.</p>
            </div>
            <div className="final-offer-bullet">
              <h4>Works for anyone</h4>
              <p>Personal trainers, Big 4 managing directors, political advisors, students, coaches, founders. The framework flexes to you and your mission. No code required.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-narrow" id="register" style={{ marginTop: '48px', textAlign: 'center' }}>
        <a
          href="https://replay.aipowered.xyz/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-white"
        >
          Watch the replay
        </a>
        <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '13px', color: 'rgba(255,255,255,0.35)', fontStyle: 'italic' }}>
          Free. 60 minutes. The full event, on demand.
        </p>
      </div>
    </section>
  )
}
