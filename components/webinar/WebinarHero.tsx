import { getCDN } from '@/lib/cdn'

export default function WebinarHero() {
  return (
    <section className="webinar-hero">
      <div className="webinar-hero-inner anim">
        <p className="hero-eyebrow">Free live webinar &middot; 23 April &middot; 5pm UK</p>
        <h1>
          Claude can give you<br />
          more freedom, speed,<br />
          and clarity. So why are<br />
          you using it like ChatGPT?
        </h1>
        <p className="webinar-hero-sub">
          Most people ask Claude a question and move on. In 60 minutes, you'll see
          how the top 1% have turned it into a system that actually runs their business.
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
        <a href="#register" className="btn-white">Claim your spot &middot; 23 April, 5pm UK</a>
        <p className="hero-supporting">60 minutes. Real framework. Live build. Immediate value.</p>
      </div>
    </section>
  )
}
