'use client'

import { useEffect, useRef, useState } from 'react'

function AnimatedNumber({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const steps = 60
    const increment = target / steps
    const stepTime = duration / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepTime)
    return () => clearInterval(timer)
  }, [started, target, duration])

  return <div ref={ref} className="ahead-number">{count.toLocaleString()}{suffix}</div>
}

const stats = [
  {
    number: 19,
    suffix: 'M+',
    label: 'Monthly Claude users',
    detail: 'One of the fastest-growing AI platforms in the world',
  },
  {
    number: 70,
    suffix: '%',
    label: 'Fortune 100 use Claude',
    detail: 'The biggest companies are already building on it',
  },
  {
    number: 1,
    suffix: '%',
    label: 'Have built a system',
    detail: 'Fewer than 1 in 100 users have turned Claude into something that actually works for them',
  },
]

export default function GettingAhead() {
  return (
    <section className="ahead-section">
      <div className="container">
        <p className="eyebrow eyebrow-accent anim">The opportunity</p>
        <h2 className="white anim d1">You feel behind. You're not.<br />Almost nobody knows how to use this yet.</h2>
        <p className="sub sub-grey anim d2" style={{ maxWidth: '700px', marginBottom: '16px' }}>
          Claude is moving fast. New features every week. And yet most people are still typing questions
          into a chat box, getting a mediocre answer, and saying "AI isn't that useful."
        </p>
        <p className="sub sub-grey anim d2" style={{ maxWidth: '700px', marginBottom: '64px' }}>
          The reality? The tool isn't the problem. The approach is.
          This webinar shows you the difference.
        </p>
        <div className="ahead-grid">
          {stats.map((s, i) => (
            <div key={i} className={`ahead-card anim d${i + 2}`}>
              <AnimatedNumber target={s.number} suffix={s.suffix} />
              <div className="ahead-label">{s.label}</div>
              <p className="ahead-detail">{s.detail}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '48px' }} className="anim d4">
          <a href="#register" className="btn-white">Claim your spot &middot; 23 April, 5pm UK</a>
        </div>
      </div>
    </section>
  )
}
