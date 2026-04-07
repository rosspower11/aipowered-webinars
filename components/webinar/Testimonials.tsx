import { getCDN } from '@/lib/cdn'

const screenshots = [
  'proof/Screenshot%202026-02-02%20at%2017.14.30.png',
  'proof/Screenshot%202026-02-03%20at%2009.24.18.png',
  'proof/Screenshot%202026-02-03%20at%2009.24.27.png',
  'proof/Screenshot%202026-02-03%20at%2009.24.32.png',
  'proof/Screenshot%202026-02-03%20at%2009.24.38.png',
  'proof/Screenshot%202026-02-03%20at%2009.24.41.png',
  'proof/Screenshot%202026-02-03%20at%2009.24.44.png',
  'proof/Screenshot%202026-02-03%20at%2009.24.50.png',
  'proof/Screenshot%202026-02-03%20at%2009.24.58.png',
  'proof/Screenshot%202026-02-03%20at%2009.25.01.png',
  'proof/Screenshot%202026-02-03%20at%2009.25.04.png',
  'proof/Screenshot%202026-02-03%20at%2009.25.10.png',
  'proof/Screenshot%202026-02-03%20at%2009.25.33.png',
  'proof/Screenshot%202026-02-28%20at%2009.58.43.png',
  'proof/Screenshot%202026-02-28%20at%2009.59.31.png',
  'proof/Screenshot%202026-02-28%20at%2009.59.36.png',
  'proof/Screenshot%202026-02-28%20at%2009.59.46.png',
  'proof/Screenshot%202026-02-28%20at%2010.00.01.png',
  'proof/Screenshot%202026-02-28%20at%2010.00.06.png',
  'proof/Screenshot%202026-02-28%20at%2010.00.24.png',
  'proof/Screenshot%202026-02-28%20at%2010.00.41.png',
  'proof/Screenshot%202026-02-28%20at%2010.00.48.png',
  'proof/Screenshot%202026-02-28%20at%2010.00.57.png',
  'proof/Screenshot%202026-02-28%20at%2010.04.39.png',
  'proof/Screenshot%202026-02-28%20at%2010.05.04.png',
  'proof/Screenshot%202026-02-28%20at%2010.05.09.png',
  'proof/Screenshot%202026-04-07%20at%2010.10.17.png',
  'proof/Screenshot%202026-04-07%20at%2010.10.22.png',
  'proof/Screenshot%202026-04-07%20at%2010.10.30.png',
  'proof/Screenshot%202026-04-07%20at%2010.10.34.png',
  'proof/Screenshot%202026-04-07%20at%2010.10.40.png',
  'proof/Screenshot%202026-04-07%20at%2010.10.48.png',
  'proof/Screenshot%202026-04-07%20at%2010.10.54.png',
  'proof/Screenshot%202026-04-07%20at%2010.10.59.png',
]

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <p className="eyebrow anim">Not sure?</p>
        <h2 className="white anim d1">Hear from others like you</h2>
        <p className="sub sub-grey anim d2" style={{ marginBottom: '48px' }}>
          Real feedback from real people who've worked with Ross.
        </p>
        <div className="testimonials-grid">
          {screenshots.map((src, i) => (
            <div key={i} className={`testimonial-img anim d${Math.min((i % 3) + 1, 3)}`}>
              <img
                src={getCDN(src)}
                alt="Feedback screenshot"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '4px' }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
