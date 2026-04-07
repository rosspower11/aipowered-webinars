import { getCDN } from '@/lib/cdn'

export default function WebinarAbout() {
  return (
    <section className="about">
      <div className="about-layout">
        <div className="about-photo">
          <img
            src={getCDN('ross-headshots/ross%20promise%20photo.png')}
            alt="Ross Power"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="about-text">
          <p className="about-eyebrow anim">Your host</p>
          <h2 className="white anim d1">Meet Ross Power</h2>
          <p className="anim d2">
            Ross spent a decade building and leading product teams. 3 years at <strong>Accenture</strong> across complex projects, training as a Scrum Master and Product Manager. He then moved into startups, leading product and engineering teams in <strong>blockchain implementation</strong>, facilitating design sprints for C-Suite executives and then <strong>Head of Product</strong> at a <strong>NYSE listed company</strong>.
          </p>
          <p className="anim d2">
            Having trained <strong>over 300 people</strong> in AI education, Ross now brings both together in an entirely new way. He works exclusively with <strong>Claude from Anthropic</strong> because it is the most capable AI platform for building real business systems. Using Claude as the host, he built the <strong>personal ClaudeOS</strong> framework from AI Powered.
          </p>
          <p className="anim d3">
            This <strong>webinar is the exclusive public release of the ClaudeOS from AI Powered</strong>, a new approach to learning and implementing AI with Claude. Ross walks you through the complete framework, builds a skill live, and gives you a clear picture of what a personal OS looks like and how to start building yours.
          </p>
          <div className="about-stats anim d3">
            <div className="about-stat">
              <div className="about-stat-n">300+</div>
              <div className="about-stat-l">People trained</div>
            </div>
            <div className="about-stat">
              <div className="about-stat-n">6</div>
              <div className="about-stat-l">Industries</div>
            </div>
            <div className="about-stat">
              <div className="about-stat-n">10yr</div>
              <div className="about-stat-l">Product experience</div>
            </div>
          </div>
          <div style={{ marginTop: '32px' }} className="anim d4">
            <a href="#register" className="btn-white">Claim your spot &middot; 23 April, 5pm UK</a>
          </div>
          <p className="about-disclaimer anim d4">
            Ross and AI Powered Group have no official affiliation with Claude or Anthropic. ClaudeOS is an independent framework designed by Ross Power.
          </p>
        </div>
      </div>
    </section>
  )
}
