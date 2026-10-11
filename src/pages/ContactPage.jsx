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

const WHATSAPP_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21l1.4-4.2A8 8 0 1 1 8.2 19.6L3 21z" />
    <path d="M8.5 9.5c0 3 2.5 5.5 5.5 5.5" />
  </svg>
)

const PIN_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
)

const CONTACT_CARDS = [
  { icon: MAIL_ICON, label: 'Email', value: 'info@selectionstechnologies.com', href: 'mailto:info@selectionstechnologies.com' },
  { icon: WHATSAPP_ICON, label: 'WhatsApp', value: '+44 7448 091908', href: 'https://wa.me/447448091908', external: true },
  { icon: PHONE_ICON, label: 'UK Phone', value: '+44 7448 091908', href: 'tel:+447448091908' },
  { icon: PHONE_ICON, label: 'PK Phone', value: '+92 300 3209005', href: 'tel:+923003209005' },
  { icon: PIN_ICON, label: 'Headquarters', value: 'Flat 76, Croydon High Street, UK' },
]

export default function ContactPage() {
  return (
    <div className="content-page">
      <div className="eyebrow">Let's Work Together</div>
      <h1>Contact Us</h1>
      <p className="lead">
        Reach Selections Technologies directly using our official contact details below. We serve
        clients across the UK, Pakistan and worldwide.
      </p>

      <div className="contact-grid">
        {CONTACT_CARDS.map((item) => (
          <div className="contact-card" key={item.label}>
            <div className="contact-icon">{item.icon}</div>
            <div>
              <div className="contact-label">{item.label}</div>
              {item.href ? (
                <a href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noopener' : undefined}>
                  {item.value}
                </a>
              ) : (
                <span className="contact-value">{item.value}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
