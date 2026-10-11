import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
  { to: '/team', label: 'Team' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <div className="header-brand">
        <Link to="/" className="logo-text" onClick={() => setOpen(false)}>
          <span className="brand-primary">Selections</span>
          <span className="brand-accent">Tech</span>
        </Link>
        <div className="logo-suffix">Meet</div>
      </div>

      <button
        className="nav-toggle"
        type="button"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={open ? 'site-nav open' : 'site-nav'}>
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            onClick={() => setOpen(false)}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
