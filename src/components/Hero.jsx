import { useEffect, useState } from 'react'

const BRAND_NAME = 'Selections Technologies'
const TYPE_SPEED_MS = 55

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function Hero() {
  const [typed, setTyped] = useState(() => (prefersReducedMotion() ? BRAND_NAME : ''))
  const [typing, setTyping] = useState(() => !prefersReducedMotion())

  useEffect(() => {
    if (prefersReducedMotion()) return

    let i = 0
    const id = setInterval(() => {
      i += 1
      setTyped(BRAND_NAME.slice(0, i))
      if (i >= BRAND_NAME.length) {
        clearInterval(id)
        setTyping(false)
      }
    }, TYPE_SPEED_MS)

    return () => clearInterval(id)
  }, [])

  return (
    <div className="hero">
      <div className="hero-text">
        <h1>
          Seamless Meetings,
          <br />
          Powered by <span className={typing ? 'typewriter-cursor' : ''}>{typed}</span>
        </h1>
        <p>Start or join a secure video meeting in seconds — no downloads, no accounts needed.</p>
      </div>

      <div className="hero-illustration" aria-hidden="true">
        <svg viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="200" height="140" rx="16" fill="var(--svg-panel)" stroke="var(--brand-blue)" strokeWidth="3" />
          <circle cx="120" cy="90" r="28" fill="var(--brand-blue)" opacity="0.15" />
          <circle cx="120" cy="80" r="16" fill="var(--brand-blue)" />
          <rect x="88" y="104" width="64" height="30" rx="15" fill="var(--brand-blue)" />
          <rect x="150" y="70" width="120" height="90" rx="14" fill="var(--card)" stroke="var(--brand-navy)" strokeWidth="3" />
          <circle cx="210" cy="105" r="18" fill="var(--brand-navy)" opacity="0.18" />
          <circle cx="210" cy="98" r="10" fill="var(--brand-navy)" />
          <rect x="192" y="112" width="36" height="18" rx="9" fill="var(--brand-navy)" />
          <circle cx="270" cy="40" r="6" fill="var(--brand-blue)" />
          <circle cx="30" cy="200" r="5" fill="var(--brand-navy)" />
          <path d="M240 190 q20 -10 34 4" stroke="var(--brand-blue)" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  )
}
