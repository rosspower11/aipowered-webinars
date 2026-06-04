import { webinar } from '@/lib/webinar'

export default function WebinarMarquee() {
  const items = [...webinar.marquee]
  const doubled = [...items, ...items]
  return (
    <div className="marquee">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className={`marquee-item ${item === '·' ? 'marquee-sep' : ''}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
