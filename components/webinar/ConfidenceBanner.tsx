const items = Array(12).fill('Confidence Comes From Doing')

export default function ConfidenceBanner() {
  const doubled = [...items, ...items]
  return (
    <div className="confidence-banner">
      <div className="confidence-track">
        {doubled.map((item, i) => (
          <span key={i} className="confidence-item">{item}</span>
        ))}
      </div>
    </div>
  )
}
