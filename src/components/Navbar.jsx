import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Explore', href: '#services' },
  { label: 'Jobs & Housing', href: '#jobs-housing' },
  { label: 'New in Utrecht', href: '#guide' },
  { label: 'Events', href: '#events' },
  { label: 'Partner With Us', href: '#partner' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = () => setMobileOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">The Utrecht Hub</Link>

        {/* Desktop links */}
        <div className="navbar__links">
          {NAV_LINKS.map(link => (
            <a key={link.label} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div className={`navbar__mobile ${mobileOpen ? 'navbar__mobile--open' : ''}`}>
        {NAV_LINKS.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            className="navbar__mobile-link"
            onClick={handleNavClick}
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
