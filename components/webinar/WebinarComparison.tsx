'use client'

import { webinar } from '@/lib/webinar'
import WebinarCTA from '@/components/webinar/WebinarCTA'

function cellClass(val: string) {
  if (val.startsWith('\u2713') || val.startsWith('✓')) return 'comp-yes'
  if (val.startsWith('\u2717') || val.startsWith('✗')) return 'comp-no'
  return ''
}

export default function WebinarComparison() {
  const { comparison } = webinar
  const [usCol, genericCol, diyCol] = comparison.columns
  return (
    <section className="comparison">
      <div className="container">
        <p className="eyebrow anim">{comparison.eyebrow}</p>
        <h2 className="white anim d1">{comparison.title}</h2>
        <table className="comp-table anim d2">
          <thead>
            <tr>
              <th></th>
              <th className="hl">{usCol}</th>
              <th>{genericCol}</th>
              <th>{diyCol}</th>
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map((r, i) => (
              <tr key={i}>
                <td>{r.feature}</td>
                <td className={`hl ${cellClass(r.us)}`}>{r.us}</td>
                <td className={cellClass(r.generic)}>{r.generic}</td>
                <td className={cellClass(r.diy)}>{r.diy}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ textAlign: 'center', marginTop: '48px' }} className="anim d3">
          <WebinarCTA className="btn-white" />
        </div>
      </div>
    </section>
  )
}
