import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <h3 className="footer__logo">The Utrecht Hub</h3>
            <p className="footer__tagline">
              The go-to resource for internationals living, working, and connecting in Utrecht and surrounding area.
              Built by the community, for the community — since 2015.
            </p>
          </div>

          {/* Resources */}
          <div className="footer__col">
            <h4 className="footer__col-title">Resources</h4>
            <a href="#" className="footer__link">Jobs Board</a>
            <a href="#" className="footer__link">Housing Board</a>
            <a href="#guide" className="footer__link">New in Utrecht Guide</a>
            <a href="#" className="footer__link">Trusted Services</a>
          </div>

          {/* Community */}
          <div className="footer__col">
            <h4 className="footer__col-title">Community</h4>
            <a href="#events" className="footer__link">Events</a>
            <a href="#" className="footer__link">Facebook Group</a>
            <a href="#" className="footer__link">Meetup Group</a>
            <a href="#" className="footer__link">About Us</a>
          </div>

          {/* For Businesses */}
          <div className="footer__col">
            <h4 className="footer__col-title">For Businesses</h4>
            <a href="#partner" className="footer__link">Partner With Us</a>
            <a href="#" className="footer__link">Advertise</a>
            <a href="#" className="footer__link">List a Job</a>
            <a href="mailto:hello@theutrechthub.com" className="footer__link">Contact</a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2026 The Utrecht Hub · KVK-registered · Utrecht, Netherlands
          </p>
          <div className="footer__social">
            <a href="#" className="footer__social-link" aria-label="Facebook">FB</a>
            <a href="#" className="footer__social-link" aria-label="Meetup">MU</a>
            <a href="#" className="footer__social-link" aria-label="Instagram">@</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
