const items = [
  '23 April · 5pm UK',
  '·',
  'Free 60-minute webinar',
  '·',
  'Live skill build',
  '·',
  'The 5C framework',
  '·',
  'Chat · Create · Connect · Customise · Command',
  '·',
]

export default function WebinarMarquee() {
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
