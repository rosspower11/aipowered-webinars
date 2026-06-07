'use client'

import { useEffect, useState } from 'react'
import { webinar } from '@/lib/webinar'

type TL = { show: boolean; done: boolean; d: number; h: number; m: number; s: number }

function getTimeLeft(target: number, showFrom: number): TL {
  const now = Date.now()
  if (now < showFrom) return { show: false, done: false, d: 0, h: 0, m: 0, s: 0 }
  const diff = target - now
  if (diff <= 0) return { show: true, done: true, d: 0, h: 0, m: 0, s: 0 }
  return {
    show: true,
    done: false,
    d: Math.floor(diff / 86_400_000),
    h: Math.floor((diff / 3_600_000) % 24),
    m: Math.floor((diff / 60_000) % 60),
    s: Math.floor((diff / 1000) % 60),
  }
}

const pad = (n: number) => String(n).padStart(2, '0')

export default function WebinarCountdown() {
  const target = new Date(webinar.event.startsAt).getTime()
  const showFrom = new Date(webinar.event.countdownFrom).getTime()
  const [tl, setTl] = useState<TL | null>(null)

  useEffect(() => {
    const tick = () => setTl(getTimeLeft(target, showFrom))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [target, showFrom])

  if (!tl?.show || tl.done) return null

  return (
    <div className="hero-countdown anim">
      <span className="hero-countdown-label">Session starts in</span>
      <div className="hero-countdown-units">
        <div className="hero-countdown-unit">
          <span className="hero-countdown-num">{pad(tl.d)}</span>
          <span className="hero-countdown-lbl">Days</span>
        </div>
        <span className="hero-countdown-sep">:</span>
        <div className="hero-countdown-unit">
          <span className="hero-countdown-num">{pad(tl.h)}</span>
          <span className="hero-countdown-lbl">Hrs</span>
        </div>
        <span className="hero-countdown-sep">:</span>
        <div className="hero-countdown-unit">
          <span className="hero-countdown-num">{pad(tl.m)}</span>
          <span className="hero-countdown-lbl">Min</span>
        </div>
        <span className="hero-countdown-sep">:</span>
        <div className="hero-countdown-unit">
          <span className="hero-countdown-num">{pad(tl.s)}</span>
          <span className="hero-countdown-lbl">Sec</span>
        </div>
      </div>
    </div>
  )
}
