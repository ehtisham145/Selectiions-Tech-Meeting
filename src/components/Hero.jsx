import { useEffect, useState } from 'react'

const BRAND_NAME = 'Selections Technologies'
const TYPE_SPEED_MS = 55
const DELETE_SPEED_MS = 32
const HOLD_FULL_MS = 1500
const HOLD_EMPTY_MS = 500

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function Hero() {
  const [reduceMotion] = useState(prefersReducedMotion)
  const [typed, setTyped] = useState(() => (reduceMotion ? BRAND_NAME : ''))

  // Loops forever: type the brand name out, hold, delete it, hold, repeat.
  useEffect(() => {
    if (reduceMotion) return

    let timeoutId

    function typeForward(i) {
      setTyped(BRAND_NAME.slice(0, i))
      if (i < BRAND_NAME.length) {
        timeoutId = setTimeout(() => typeForward(i + 1), TYPE_SPEED_MS)
      } else {
        timeoutId = setTimeout(() => typeBackward(i), HOLD_FULL_MS)
      }
    }

    function typeBackward(i) {
      setTyped(BRAND_NAME.slice(0, i))
      if (i > 0) {
        timeoutId = setTimeout(() => typeBackward(i - 1), DELETE_SPEED_MS)
      } else {
        timeoutId = setTimeout(() => typeForward(0), HOLD_EMPTY_MS)
      }
    }

    typeForward(0)

    return () => clearTimeout(timeoutId)
  }, [reduceMotion])

  return (
    <div className="hero">
      <div className="hero-text">
        <h1>
          Seamless Meetings,
          <br />
          Powered by <span className={reduceMotion ? '' : 'typewriter-cursor'}>{typed}</span>
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
