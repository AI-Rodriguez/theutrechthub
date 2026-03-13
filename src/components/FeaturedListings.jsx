import { useState, useEffect, useRef } from 'react'
import './FeaturedListings.css'

const JOBS = [
  {
    title: 'Marketing Coordinator',
    company: 'TechFlow Solutions',
    location: 'Utrecht Centrum',
    tags: ['Full-time', 'English', 'Hybrid'],
    badge: 'New',
    posted: 'Posted 2 days ago',
  },
  {
    title: 'UX Designer',
    company: 'Creative Bridge Agency',
    location: 'Leidsche Rijn',
    tags: ['Full-time', 'English', 'On-site'],
    badge: 'Featured',
    posted: 'Posted 5 days ago',
  },
  {
    title: 'Customer Success Manager',
    company: 'GlobalServe NL',
    location: 'Utrecht Science Park',
    tags: ['Full-time', 'English + Dutch', 'Remote'],
    badge: 'New',
    posted: 'Posted 1 day ago',
  },
]

const HOUSING = [
  {
    title: '2-bedroom apartment in Wittevrouwen',
    location: 'Wittevrouwensingel',
    details: '65m² · Furnished',
    price: '€1,350/month',
    tags: ['Available April 1', 'Pet-friendly'],
    badge: 'Verified',
    posted: 'Listed 3 days ago',
  },
  {
    title: 'Studio near Utrecht Centraal',
    location: 'Catharijnesingel',
    details: '38m² · Unfurnished',
    price: '€950/month',
    tags: ['Available now', 'Registered'],
    badge: 'New',
    posted: 'Listed today',
  },
  {
    title: 'Family home in Tuindorp',
    location: 'Tuindorp',
    details: '90m² · Unfurnished',
    price: '€1,650/month',
    tags: ['Available May 1', 'Garden'],
    badge: 'Verified',
    posted: 'Listed 1 week ago',
  },
]

export default function FeaturedListings() {
  const [activeTab, setActiveTab] = useState('jobs')
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
    <section className="listings" id="jobs-housing" ref={sectionRef}>
      <div className="container">
        <div className="listings__header animate-on-scroll">
          <p className="section-label">Featured Listings</p>
          <h2 className="section-title">Latest Opportunities</h2>
          <p className="listings__subtitle">Fresh job openings and housing listings updated regularly.</p>
        </div>

        <div className="listings__tabs animate-on-scroll">
          <button
            className={`listings__tab ${activeTab === 'jobs' ? 'listings__tab--active' : ''}`}
            onClick={() => setActiveTab('jobs')}
          >
            Jobs
          </button>
          <button
            className={`listings__tab ${activeTab === 'housing' ? 'listings__tab--active' : ''}`}
            onClick={() => setActiveTab('housing')}
          >
            Housing
          </button>
        </div>

        <div className="listings__content animate-on-scroll">
          {activeTab === 'jobs' ? (
            <div className="listings__list">
              {JOBS.map((job, i) => (
                <div key={i} className="listings__card">
                  <div className="listings__card-top">
                    <span className={`listings__badge listings__badge--${job.badge.toLowerCase()}`}>
                      {job.badge}
                    </span>
                    <span className="listings__posted">{job.posted}</span>
                  </div>
                  <h3 className="listings__card-title">{job.title}</h3>
                  <p className="listings__card-meta">{job.company} · {job.location}</p>
                  <div className="listings__tags">
                    {job.tags.map(tag => (
                      <span key={tag} className="listings__tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="listings__list">
              {HOUSING.map((item, i) => (
                <div key={i} className="listings__card">
                  <div className="listings__card-top">
                    <span className={`listings__badge listings__badge--${item.badge.toLowerCase()}`}>
                      {item.badge}
                    </span>
                    <span className="listings__posted">{item.posted}</span>
                  </div>
                  <div className="listings__price">{item.price}</div>
                  <h3 className="listings__card-title">{item.title}</h3>
                  <p className="listings__card-meta">📍 {item.location} · {item.details}</p>
                  <div className="listings__tags">
                    {item.tags.map(tag => (
                      <span key={tag} className="listings__tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="listings__footer">
            <a href="#" className="btn-secondary">
              View all {activeTab === 'jobs' ? 'jobs' : 'housing'} →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
