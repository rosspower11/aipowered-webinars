import { getCDN } from '@/lib/cdn'

export default function WebinarHero() {
  return (
    <section className="webinar-hero">
      <div className="webinar-hero-inner anim">
        <p className="hero-eyebrow">Great event last week &middot; Watch the replay</p>
        <h1>
          Claude can give you<br />
          more freedom, speed,<br />
          and clarity. So why are<br />
          you using it like ChatGPT?
        </h1>
        <p className="webinar-hero-sub">
          We had a great event last week. In 60 minutes, you'll see how the top 1%
          have turned Claude into a personal operating system that actually runs
          their business, life and accelerates their career. Catch the full replay below.
        </p>
        <div className="webinar-hero-proof">
          <img
            src={getCDN('ross-headshots/ross%20promise%20photo.png')}
            alt="Ross Power"
            className="webinar-hero-avatar"
          />
          <p>
            <strong>Ross Power</strong> has trained 300+ people. Cohort 1 includes personal trainers,
            Big 4 managing directors, political advisors, students, digital marketers, leadership coaches,
            ex-corporate founders, and everything in between.
          </p>
        </div>
        <a href="https://replay.aipowered.xyz/" target="_blank" rel="noopener noreferrer" className="btn-white">Watch the replay</a>
        <p className="hero-supporting">60 minutes. Real framework. Live build. Immediate value.</p>
      </div>
    </section>
  )
}
