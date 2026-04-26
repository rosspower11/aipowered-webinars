'use client'

import { useEffect, useRef, useState } from 'react'

function AnimatedNumber({ target, suffix = '', prefix = '', duration = 2000 }: { target: number; suffix?: string; prefix?: string; duration?: number }) {
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

  return <div ref={ref} className="ahead-number">{prefix}{count.toLocaleString()}{suffix}</div>
}

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
          The replay from last week's event shows you the difference.
        </p>
        <div className="ahead-grid">
          <div className="ahead-card anim d2">
            <AnimatedNumber target={19} suffix="M+" />
            <div className="ahead-label">Monthly Claude users</div>
            <p className="ahead-detail">One of the fastest-growing AI platforms in the world</p>
          </div>
          <div className="ahead-card anim d3">
            <AnimatedNumber target={70} suffix="%" />
            <div className="ahead-label">Fortune 100 use Claude</div>
            <p className="ahead-detail">The biggest companies are already building on it</p>
          </div>
          <div className="ahead-card anim d4">
            <div className="ahead-number">0.01%</div>
            <div className="ahead-label">Have built a system</div>
            <p className="ahead-detail">1 in 10,000 users have turned Claude into something that actually works for them</p>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '48px' }} className="anim d4">
          <a href="https://replay.aipowered.xyz/" target="_blank" rel="noopener noreferrer" className="btn-white">Watch the replay</a>
        </div>
      </div>
    </section>
  )
}
