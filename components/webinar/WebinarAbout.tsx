import { getCDN } from '@/lib/cdn'
import { webinar } from '@/lib/webinar'

export default function WebinarAbout() {
  const { about } = webinar
  return (
    <section className="about about-light">
      <div className="about-layout">
        <div className="about-photo-col">
          <div className="about-photo">
            <img
              src={getCDN('ross-headshots/ross%20promise%20photo.png')}
              alt="Ross Power"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          {about.photoCaption ? (
            <p className="about-photo-caption anim">{about.photoCaption}</p>
          ) : null}
        </div>
        <div className="about-text">
          <p className="about-eyebrow anim">{about.eyebrow}</p>
          <h2 className="dark anim d1">{about.title}</h2>
          {about.paragraphs.map((p, i) => (
            <p key={i} className={`anim d${Math.min(i + 2, 4)}`}>{p}</p>
          ))}
          <p className="about-disclaimer anim d4">{about.disclaimer}</p>
        </div>
      </div>
    </section>
  )
}
