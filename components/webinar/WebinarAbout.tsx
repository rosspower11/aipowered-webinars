import { getCDN } from '@/lib/cdn'
import { webinar } from '@/lib/webinar'
import WebinarCTA from '@/components/webinar/WebinarCTA'

export default function WebinarAbout() {
  const { about } = webinar
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
          <p className="about-eyebrow anim">{about.eyebrow}</p>
          <h2 className="white anim d1">{about.title}</h2>
          {about.paragraphs.map((p, i) => (
            <p key={i} className={`anim d${Math.min(i + 2, 3)}`}>{p}</p>
          ))}
          <div className="about-stats anim d3">
            {about.stats.map((s) => (
              <div key={s.l} className="about-stat">
                <div className="about-stat-n">{s.n}</div>
                <div className="about-stat-l">{s.l}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '32px' }} className="anim d4">
            <WebinarCTA className="btn-white" />
          </div>
          <p className="about-disclaimer anim d4">{about.disclaimer}</p>
        </div>
      </div>
    </section>
  )
}
