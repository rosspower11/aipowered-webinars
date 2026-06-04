import { webinar } from '@/lib/webinar'

export default function AcademicVsAccelerator() {
  const { problem } = webinar
  return (
    <section className="webinar-academic">
      <div className="container">
        <p className="eyebrow anim" style={{ color: 'var(--text-dark-grey)' }}>{problem.eyebrow}</p>
        <h2 className="dark anim d1">
          {problem.title.split('\n').map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </h2>
        <div className="webinar-academic-grid">
          <div className="webinar-academic-card anim d2">
            <p className="webinar-academic-tag">{problem.left.tag}</p>
            <h3>{problem.left.title}</h3>
            <ul>
              {problem.left.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <div className="webinar-academic-card webinar-academic-card--accent anim d3">
            <p className="webinar-academic-tag">{problem.right.tag}</p>
            <h3>{problem.right.title}</h3>
            <ul>
              {problem.right.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="webinar-academic-bottom anim d4">{problem.bottom}</p>
      </div>
    </section>
  )
}
