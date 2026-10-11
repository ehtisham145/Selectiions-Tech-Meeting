const BADGES = [
  {
    label: 'Free & Instant',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="var(--brand-navy)" opacity="0.15" />
        <path d="M8 12.5l2.5 2.5L16 9" stroke="var(--brand-navy)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'No Downloads',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="var(--brand-blue)" opacity="0.15" />
        <path d="M13 7l-5 6h3.5L11 17l5-6h-3.5L13 7z" fill="var(--brand-blue)" />
      </svg>
    ),
  },
  {
    label: 'Secure Rooms',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="var(--brand-navy)" opacity="0.15" />
        <path d="M12 7l4 1.6v3.2c0 3-1.7 4.8-4 5.6-2.3-.8-4-2.6-4-5.6V8.6L12 7z" stroke="var(--brand-navy)" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Badges() {
  return (
    <div className="badges">
      {BADGES.map((badge) => (
        <div className="badge" key={badge.label}>
          {badge.icon}
          {badge.label}
        </div>
      ))}
    </div>
  )
}
