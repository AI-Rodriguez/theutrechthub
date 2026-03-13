import { useEffect, useRef } from 'react'
import './Services.css'

const SERVICES = [
  {
    icon: '💼',
    title: 'Jobs Board',
    description: 'Curated job listings from companies that value international talent. English-friendly positions in Utrecht and surroundings.',
    link: '#',
    linkText: 'Browse jobs →',
  },
  {
    icon: '🏠',
    title: 'Housing Board',
    description: 'Verified housing listings and trusted resources. We help you navigate the Dutch rental market safely.',
    link: '#',
    linkText: 'Find housing →',
  },
  {
    icon: '🎉',
    title: 'Events',
    description: 'Meetups, workshops, cultural evenings, and community gatherings. Meet your people in Utrecht.',
    link: '#events',
    linkText: 'See events →',
  },
  {
    icon: '📖',
    title: 'New in Utrecht',
    description: 'Your practical guide to getting settled — BSN registration, healthcare, taxes, banking, and more.',
    link: '#guide',
    linkText: 'Read the guide →',
  },
  {
    icon: '⭐',
    title: 'Trusted Services',
    description: 'Vetted local businesses that serve the international community — accountants, language schools, relocation firms.',
    link: '#',
    linkText: 'View directory →',
  },
  {
    icon: '👋',
    title: 'Community',
    description: "Join 43,000+ internationals in our Facebook group. Share experiences, ask questions, find your tribe.",
    link: '#',
    linkText: 'Join us →',
  },
]

export default function Services() {
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
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const cards = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    cards?.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="services" id="services" ref={sectionRef}>
      <div className="container">
        <div className="services__header">
          <p className="section-label">What We Offer</p>
          <h2 className="section-title">Everything You Need in Utrecht</h2>
          <p className="services__subtitle">
            From finding a job to making friends — we've got you covered.
          </p>
        </div>
        <div className="services__grid">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className="services__card animate-on-scroll"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="services__icon">{service.icon}</div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-desc">{service.description}</p>
              <a href={service.link} className="services__card-link">{service.linkText}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
