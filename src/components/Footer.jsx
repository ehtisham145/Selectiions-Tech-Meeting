import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-col">
          <div className="footer-brand">
            <span className="brand-primary">Selections</span>
            <span className="brand-accent">Tech</span>
          </div>
          <p>Web • SaaS • AI • Data • Marketing</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/team">Team</Link>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <a href="mailto:info@selectionstechnologies.com">info@selectionstechnologies.com</a>
          <a href="https://wa.me/447448091908" target="_blank" rel="noopener">WhatsApp +44 7448 091908</a>
          <span>Flat 76, Croydon High Street, UK</span>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2026 Selections Technologies ·{' '}
        <a href="https://selectionstechnologies.com" target="_blank" rel="noopener">
          selectionstechnologies.com
        </a>
      </div>
    </footer>
  )
}
