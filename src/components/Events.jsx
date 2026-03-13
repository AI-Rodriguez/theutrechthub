import { useEffect, useRef } from 'react'
import './Events.css'

const EVENTS = [
  {
    month: 'Mar',
    day: '22',
    title: 'International Pub Quiz',
    venue: 'Café Olivier',
    time: '19:30',
    detail: '👥 Teams of 4–6 · All welcome',
    price: 'Free entry',
  },
  {
    month: 'Mar',
    day: '28',
    title: 'Newcomer Welcome Evening',
    venue: 'The Utrecht Hub HQ',
    time: '18:00',
    detail: '🎤 Meet locals & fellow expats',
    price: '€7 · Limited spots',
  },
  {
    month: 'Apr',
    day: '05',
    title: 'Stand-Up Comedy Night (English)',
    venue: 'De Stadstuin',
    time: '20:00',
    detail: "😂 Utrecht's best international comedians",
    price: '€12 · Get tickets',
  },
  {
    month: 'Apr',
    day: '12',
    title: 'Language Exchange Café',
    venue: 'Broers',
    time: '15:00',
    detail: '🗣️ Dutch–English practice pairs',
    price: 'Free · Walk-in',
  },
]

export default function Events() {
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
    <section className="events" id="events" ref={sectionRef}>
      <div className="container">
        <div className="events__header animate-on-scroll">
          <p className="section-label">What's Happening</p>
          <h2 className="section-title">Upcoming Events</h2>
          <p className="events__subtitle">
            Meet your people. Join the conversation. Feel at home.
          </p>
        </div>
        <div className="events__grid">
          {EVENTS.map((event, i) => (
            <div
              key={i}
              className="events__card animate-on-scroll"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="events__date">
                <span className="events__date-month">{event.month}</span>
                <span className="events__date-day">{event.day}</span>
              </div>
              <div className="events__info">
                <h3 className="events__card-title">{event.title}</h3>
                <p className="events__card-venue">📍 {event.venue} · {event.time}</p>
                <p className="events__card-detail">{event.detail}</p>
                <span className="events__price">{event.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
