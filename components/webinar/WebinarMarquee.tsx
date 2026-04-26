const items = [
  'Great event last week',
  '·',
  'Watch the replay now',
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
