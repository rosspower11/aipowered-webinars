'use client'

const rows = [
  { feature: 'Applied to Your Work', us: '\u2713 Built around your actual workflow', generic: '\u2717 Generic examples', diy: '\u2717 Random tutorials' },
  { feature: 'Personal Operating System', us: '\u2713 Full Personal OS installed', generic: '\u2717 Individual tips only', diy: '\u2717 No system at all' },
  { feature: 'Tangible Deliverables', us: '\u2713 Skills and SOPs you own', generic: '\u2717 Knowledge only', diy: '\u2717 Nothing standardised' },
  { feature: 'Learn by Doing', us: '\u2713 Build real outputs every session', generic: '\u2717 Watch and take notes', diy: '\u2717 Self-paced, no accountability' },
  { feature: 'Structured Progression', us: '\u2713 Claude Personal OS Framework (5C)', generic: '\u2717 Random topics', diy: '\u2717 No structure' },
  { feature: 'Group Momentum', us: '\u2713 Accelerator with peers', generic: '\u2717 Passive audience', diy: '\u2717 Alone' },
  { feature: 'Capstone / Proof of ROI', us: '\u2713 Present your working OS', generic: '\u2717 Certificate of completion', diy: '\u2717 No milestone' },
]

function cellClass(val: string) {
  if (val.startsWith('\u2713')) return 'comp-yes'
  if (val.startsWith('\u2717')) return 'comp-no'
  return ''
}

export default function WebinarComparison() {
  return (
    <section className="comparison">
      <div className="container">
        <p className="eyebrow anim">The Difference</p>
        <h2 className="white anim d1">Claude Personal OS vs. The Alternatives</h2>
        <table className="comp-table anim d2">
          <thead>
            <tr>
              <th></th>
              <th className="hl">Claude Personal OS</th>
              <th>Generic AI Training</th>
              <th>DIY / Self-Taught</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                <td>{r.feature}</td>
                <td className={`hl ${cellClass(r.us)}`}>{r.us}</td>
                <td className={cellClass(r.generic)}>{r.generic}</td>
                <td className={cellClass(r.diy)}>{r.diy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
