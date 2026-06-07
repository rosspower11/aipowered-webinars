import { getCDN } from '@/lib/cdn'
import { webinar } from '@/lib/webinar'

export default function WebinarAbout() {
  const { about } = webinar
  return (
    <section className="about about-compact">
      <div className="about-layout">
        <div className="about-photo">
          <img
            src={getCDN('ross-headshots/ross%20promise%20photo.png')}
            alt="Ross Power"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="about-text">
          <h2 className="white anim">{about.title}</h2>
          <p className="anim d1">{about.body}</p>
          <p className="about-disclaimer anim d2">{about.disclaimer}</p>
        </div>
      </div>
    </section>
  )
}
