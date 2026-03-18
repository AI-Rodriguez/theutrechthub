import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Partner.css'

const SERVICES = [
  {
    icon: '💼',
    title: 'Job Board',
    description:
      'Post open positions directly in front of qualified internationals actively looking for work in Utrecht. Listings appear on the website and are promoted through our community channels.',
    price: 'From €49',
    priceNote: 'per listing · 30 days',
    features: [
      'Listing on TheUtrechtHub.com',
      'Shared in 43K-member Facebook group',
      'Targeted to English-speaking professionals',
    ],
  },
  {
    icon: '📍',
    title: 'Business Directory',
    description:
      'Get a permanent listing in our Trusted Services directory — the go-to resource for internationals looking for reliable local businesses, from accountants to language schools.',
    price: 'From €25',
    priceNote: 'per month',
    features: [
      'Dedicated profile page',
      'Category placement & search visibility',
      'Verified partner badge',
    ],
  },
  {
    icon: '📣',
    title: 'Sponsored Content',
    description:
      'Reach 14,000+ active community members through featured posts in our Facebook group and cross-promotion across our platforms. High engagement, real visibility.',
    price: '€75 – €150',
    priceNote: 'per post',
    features: [
      'Featured post in Expats Utrecht (43K members)',
      '33% monthly engagement rate',
      'Cross-post in Expat Business group',
    ],
  },
  {
    icon: '🎉',
    title: 'Event Promotion',
    description:
      'Promote your event, workshop, or open day to Utrecht\'s largest international audience. Bundled visibility across website, social, and community channels.',
    price: 'From €100',
    priceNote: 'per event bundle',
    features: [
      'Website event listing',
      'Facebook group promotion post',
      'Cross-post in Expat Business group',
    ],
  },
]

const STATS = [
  { value: '43K+', label: 'Community Members' },
  { value: '14K', label: 'Active Monthly' },
  { value: '33%', label: 'Engagement Rate' },
  { value: '274', label: 'New Members / Month' },
]

const TESTIMONIALS = [
  {
    quote: 'The Utrecht Hub connected us with exactly the audience we were looking for — internationals who need English-speaking professional services.',
    author: 'Language school partner',
  },
  {
    quote: 'Within a week of listing, we had three qualified candidates apply. The community is engaged and the reach is real.',
    author: 'Utrecht-based employer',
  },
]

export default function Partner() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    service: '',
    message: '',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const pageRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    const items = pageRef.current?.querySelectorAll('.animate-on-scroll')
    items?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // For now, show confirmation. Backend integration comes later.
    setFormSubmitted(true)
  }

  return (
    <div ref={pageRef}>
      <Navbar />

      {/* Hero */}
      <section className="partner-hero">
        <div className="partner-hero__bg" />
        <div className="partner-hero__content">
          <Link to="/" className="partner-hero__back">← Back to Home</Link>
          <p className="section-label">For Businesses</p>
          <h1 className="partner-hero__title">
            Reach Utrecht's Largest<br />International Community
          </h1>
          <p className="partner-hero__subtitle">
            Connect your business with 43,000+ internationals who are actively looking for
            jobs, housing, services, and events in Utrecht and surrounding area.
          </p>
          <a href="#partner-contact" className="btn-primary">
            Become a Partner →
          </a>
        </div>
      </section>

      {/* Stats bar */}
      <section className="partner-stats">
        <div className="container">
          <div className="partner-stats__grid">
            {STATS.map((stat) => (
              <div key={stat.label} className="partner-stats__item animate-on-scroll">
                <span className="partner-stats__value">{stat.value}</span>
                <span className="partner-stats__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why partner */}
      <section className="partner-why">
        <div className="container">
          <div className="partner-why__header animate-on-scroll">
            <p className="section-label">Why Partner With Us</p>
            <h2 className="section-title">Your Audience Is Already Here</h2>
            <p className="partner-why__subtitle">
              The Utrecht Hub has been the trusted community for internationals in Utrecht since 2015.
              Our members are professionals, families, and students actively seeking local services, employment, and events — in English.
            </p>
          </div>

          <div className="partner-why__points animate-on-scroll">
            <div className="partner-why__point">
              <span className="partner-why__point-icon">🎯</span>
              <div>
                <h3 className="partner-why__point-title">Hyperlocal Reach</h3>
                <p className="partner-why__point-desc">
                  Unlike national platforms, we focus exclusively on Utrecht and surrounding area. Every member is here because they live, work, or are moving to Utrecht.
                </p>
              </div>
            </div>
            <div className="partner-why__point">
              <span className="partner-why__point-icon">💬</span>
              <div>
                <h3 className="partner-why__point-title">Engaged Community</h3>
                <p className="partner-why__point-desc">
                  With a 33% monthly active rate and growing engagement, your message doesn't just get seen — it gets discussed, shared, and acted on.
                </p>
              </div>
            </div>
            <div className="partner-why__point">
              <span className="partner-why__point-icon">🤝</span>
              <div>
                <h3 className="partner-why__point-title">Trust-First Platform</h3>
                <p className="partner-why__point-desc">
                  Built over 10 years of genuine community building. Partners are featured — not spammed. Your brand benefits from the trust we've earned.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services / Pricing */}
      <section className="partner-services">
        <div className="container">
          <div className="partner-services__header animate-on-scroll">
            <p className="section-label">Services & Pricing</p>
            <h2 className="section-title">Choose How You Want to Connect</h2>
            <p className="partner-services__subtitle">
              Transparent starting prices. Custom packages available for businesses that want a tailored approach.
            </p>
          </div>

          <div className="partner-services__grid">
            {SERVICES.map((service, i) => (
              <div
                key={service.title}
                className="partner-services__card animate-on-scroll"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="partner-services__card-icon">{service.icon}</div>
                <h3 className="partner-services__card-title">{service.title}</h3>
                <p className="partner-services__card-desc">{service.description}</p>

                <div className="partner-services__pricing">
                  <span className="partner-services__price">{service.price}</span>
                  <span className="partner-services__price-note">{service.priceNote}</span>
                </div>

                <ul className="partner-services__features">
                  {service.features.map((feature) => (
                    <li key={feature} className="partner-services__feature">
                      <span className="partner-services__check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a href="#partner-contact" className="partner-services__cta">
                  Get Started →
                </a>
              </div>
            ))}
          </div>

          <p className="partner-services__custom animate-on-scroll">
            Looking for something specific? We offer custom packages tailored to your goals.{' '}
            <a href="#partner-contact">Let's talk →</a>
          </p>
        </div>
      </section>

      {/* Social proof */}
      <section className="partner-proof">
        <div className="container">
          <div className="partner-proof__grid">
            {TESTIMONIALS.map((t, i) => (
              <blockquote
                key={i}
                className="partner-proof__quote animate-on-scroll"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <p className="partner-proof__text">"{t.quote}"</p>
                <footer className="partner-proof__author">— {t.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="partner-contact" id="partner-contact">
        <div className="container">
          <div className="partner-contact__inner animate-on-scroll">
            <div className="partner-contact__info">
              <p className="section-label">Get in Touch</p>
              <h2 className="partner-contact__title">Let's Build Something Together</h2>
              <p className="partner-contact__desc">
                Tell us about your business and what you're looking for. We'll get back to you within 2 business days with a tailored proposal.
              </p>
              <div className="partner-contact__email">
                <span className="partner-contact__email-label">Or email us directly:</span>
                <a href="mailto:hello@theutrechthub.com" className="partner-contact__email-link">
                  hello@theutrechthub.com
                </a>
              </div>
            </div>

            <div className="partner-contact__form-wrap">
              {formSubmitted ? (
                <div className="partner-contact__success">
                  <span className="partner-contact__success-icon">✓</span>
                  <h3 className="partner-contact__success-title">Message Received!</h3>
                  <p className="partner-contact__success-text">
                    Thanks for reaching out. We'll get back to you within 2 business days.
                  </p>
                </div>
              ) : (
                <div className="partner-contact__fields">
                  <div className="partner-contact__row">
                    <div className="partner-contact__field">
                      <label className="partner-contact__label" htmlFor="name">Your Name</label>
                      <input
                        className="partner-contact__input"
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jane van der Berg"
                        required
                      />
                    </div>
                    <div className="partner-contact__field">
                      <label className="partner-contact__label" htmlFor="company">Company</label>
                      <input
                        className="partner-contact__input"
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your business name"
                        required
                      />
                    </div>
                  </div>

                  <div className="partner-contact__row">
                    <div className="partner-contact__field">
                      <label className="partner-contact__label" htmlFor="email">Email</label>
                      <input
                        className="partner-contact__input"
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@company.nl"
                        required
                      />
                    </div>
                    <div className="partner-contact__field">
                      <label className="partner-contact__label" htmlFor="service">Interested In</label>
                      <select
                        className="partner-contact__input partner-contact__select"
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service...</option>
                        <option value="job-board">Job Board Listing</option>
                        <option value="directory">Business Directory</option>
                        <option value="sponsored">Sponsored Content</option>
                        <option value="event">Event Promotion</option>
                        <option value="custom">Custom Package</option>
                      </select>
                    </div>
                  </div>

                  <div className="partner-contact__field">
                    <label className="partner-contact__label" htmlFor="message">Tell Us More</label>
                    <textarea
                      className="partner-contact__input partner-contact__textarea"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="What are you looking to achieve? Any specific goals or timeline?"
                      rows={4}
                    />
                  </div>

                  <button
                    type="button"
                    className="btn-primary partner-contact__submit"
                    onClick={handleSubmit}
                  >
                    Send Message →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
