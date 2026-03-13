import { useEffect, useRef } from 'react'
import './NewInUtrecht.css'

const STEPS = [
  {
    num: 1,
    title: 'BSN & Registration',
    desc: "Register at the gemeente within 5 days of arrival. Here's exactly how — step by step.",
  },
  {
    num: 2,
    title: 'Healthcare & Insurance',
    desc: 'Dutch health insurance is mandatory. We explain the system, the costs, and how to choose.',
  },
  {
    num: 3,
    title: 'Banking & DigiD',
    desc: 'Open a Dutch bank account and get your DigiD — your digital key to everything official.',
  },
  {
    num: 4,
    title: 'Housing Essentials',
    desc: 'How the Dutch rental market works, what to watch out for, and how to avoid scams.',
  },
  {
    num: 5,
    title: 'Taxes & 30% Ruling',
    desc: 'Understanding Dutch taxes and the 30% ruling for international workers.',
  },
  {
    num: 6,
    title: 'Dutch Culture & Etiquette',
    desc: 'Directness, cycling rules, birthday circles, and why your neighbors want you to say hi.',
  },
]

export default function NewInUtrecht() {
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

    const items = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    items?.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="guide" id="guide" ref={sectionRef}>
      <div className="container">
        <div className="guide__header animate-on-scroll">
          <p className="section-label">Getting Started</p>
          <h2 className="section-title">New in Utrecht?</h2>
          <p className="guide__subtitle">
            Your step-by-step guide to settling in. Everything we wish someone had told us.
          </p>
        </div>
        <div className="guide__grid">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className="guide__step animate-on-scroll"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="guide__step-num">{step.num}</div>
              <div className="guide__step-content">
                <h3 className="guide__step-title">{step.title}</h3>
                <p className="guide__step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
