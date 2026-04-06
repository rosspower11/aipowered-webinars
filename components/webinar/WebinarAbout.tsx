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
          <p className="about-eyebrow anim">Your Host</p>
          <h2 className="white anim d1">Meet Ross Power</h2>
          <p className="anim d2">
            Ross spent a decade building and leading product teams. 3 years at Accenture across complex projects, training as a Scrum Master and Product Manager. He then moved into startups, leading product and engineering teams in blockchain implementation, facilitating design sprints for C-Suite executives and then Head of Product at a NYSE publicly listed education company.
          </p>
          <p className="anim d2">
            Having spent a year training over 300 people in AI education, Ross now brings both together in an entirely new way. He works exclusively with Claude by Anthropic because it is the most capable AI platform for building real business systems. Using Claude as the host, he built the Claude Personal OS Framework from AI Powered.
          </p>
          <p className="anim d3">
            This webinar is where Ross walks you through the complete framework, builds a Skill live, and gives you a clear picture of what a Personal OS looks like and how to start building yours. Cohort 1 of the Accelerator includes founders, VPs, and leaders across private equity, venture capital, events, coaching, and finance.
          </p>
          <div className="about-stats anim d3">
            <div className="about-stat">
              <div className="about-stat-n">300+</div>
              <div className="about-stat-l">People Trained</div>
            </div>
            <div className="about-stat">
              <div className="about-stat-n">6</div>
              <div className="about-stat-l">Industries</div>
            </div>
            <div className="about-stat">
              <div className="about-stat-n">10yr</div>
              <div className="about-stat-l">Product Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
