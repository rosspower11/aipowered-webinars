'use client'

import { useEffect, useState } from 'react'
import { webinar } from '@/lib/webinar'

type TL = { done: boolean; d: number; h: number; m: number; s: number }

function getTimeLeft(target: number): TL {
  const diff = target - Date.now()
  if (diff <= 0) return { done: true, d: 0, h: 0, m: 0, s: 0 }
  return {
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
  const [tl, setTl] = useState<TL | null>(null)

  useEffect(() => {
    const tick = () => setTl(getTimeLeft(target))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [target])

  const d = tl ? pad(tl.d) : '00'
  const h = tl ? pad(tl.h) : '00'
  const m = tl ? pad(tl.m) : '00'
  const s = tl ? pad(tl.s) : '00'
  const done = tl?.done ?? false

  return (
    <div className="webinar-countdown anim">
      <div className="countdown-dot" />
      <span className="countdown-label">
        {done ? 'Session starting now' : webinar.event.countdownLabel}
      </span>
      {!done && (
        <div className="countdown-units">
          <div className="countdown-unit">
            <div className="cd-num">{d}</div>
            <div className="cd-lbl">Days</div>
          </div>
          <div className="cd-sep">:</div>
          <div className="countdown-unit">
            <div className="cd-num">{h}</div>
            <div className="cd-lbl">Hours</div>
          </div>
          <div className="cd-sep">:</div>
          <div className="countdown-unit">
            <div className="cd-num">{m}</div>
            <div className="cd-lbl">Mins</div>
          </div>
          <div className="cd-sep">:</div>
          <div className="countdown-unit">
            <div className="cd-num">{s}</div>
            <div className="cd-lbl">Secs</div>
          </div>
        </div>
      )}
    </div>
  )
}
