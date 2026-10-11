const MAIL_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 5h16v14H4z" />
    <path d="M4 6l8 7 8-7" />
  </svg>
)

const PHONE_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
)

export default function TopBar() {
  return (
    <div className="topbar">
      <a className="topbar-item" href="mailto:info@selectionstechnologies.com">
        {MAIL_ICON}
        info@selectionstechnologies.com
      </a>
      <a className="topbar-item" href="tel:+447448091908">
        {PHONE_ICON}
        <span className="topbar-flag">UK</span> +44 7448 091908
      </a>
      <a className="topbar-item" href="tel:+923003209005">
        {PHONE_ICON}
        <span className="topbar-flag">PK</span> +92 300 3209005
      </a>
    </div>
  )
}
