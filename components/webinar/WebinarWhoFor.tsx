import { webinar } from '@/lib/webinar'

export default function WebinarWhoFor() {
  const { whoFor } = webinar
  return (
    <section className="who-section">
      <div className="container-narrow">
        <p className="eyebrow anim" style={{ color: 'var(--text-dark-grey)' }}>{whoFor.eyebrow}</p>
        <h2 className="dark anim d1">{whoFor.title}</h2>
        <p className="sub sub-dark anim d2" style={{ maxWidth: '720px' }}>{whoFor.body}</p>
      </div>
    </section>
  )
}
