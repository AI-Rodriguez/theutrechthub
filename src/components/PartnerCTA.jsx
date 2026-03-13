import { useEffect, useRef } from 'react'
import './PartnerCTA.css'

const STATS = [
  { value: '14K+', label: 'Active Monthly' },
  { value: '274', label: 'New Members/Month' },
  { value: '33%', label: 'Engagement Rate' },
]

export default function PartnerCTA() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    const items = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    items?.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="partner" id="partner" ref={sectionRef}>
      <div className="container">
        <div className="partner__card animate-on-scroll">
          <h2 className="partner__title">
            Reach Utrecht's Largest International Community
          </h2>
          <p className="partner__desc">
            Whether you're a language school, relocation agency, recruiter, or local business —
            connect with 14,000+ active internationals who are looking for exactly what you offer.
          </p>
          <div className="partner__stats">
            {STATS.map(stat => (
              <div key={stat.label} className="partner__stat">
                <span className="partner__stat-value">{stat.value}</span>
                <span className="partner__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
          <a href="mailto:hello@theutrechthub.com" className="btn-primary partner__btn">
            Become a Partner →
          </a>
        </div>
      </div>
    </section>
  )
}
