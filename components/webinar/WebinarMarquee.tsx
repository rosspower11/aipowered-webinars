const items = [
  'Build Your Personal OS',
  '·',
  'Live Skill Build',
  '·',
  'The 5C Framework',
  '·',
  'Chat · Create · Connect · Customise · Command',
  '·',
  'Free 60-Minute Webinar',
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
