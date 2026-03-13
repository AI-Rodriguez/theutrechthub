import './Hero.css'

const STATS = [
  { value: '43K+', label: 'Members' },
  { value: '10+', label: 'Years' },
  { value: '14K', label: 'Active Monthly' },
]

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg" />
      <div className="hero__content">
        <p className="section-label">Utrecht's International Community</p>
        <h1 className="hero__title">
          Your Home Away<br />from Home
        </h1>
        <p className="hero__subtitle">
          The go-to resource for internationals living, working, and connecting in Utrecht and surrounding area.
          <br />Trusted by 43,000+ community members.
        </p>
        <div className="hero__buttons">
          <a href="#services" className="btn-primary">Explore the Hub →</a>
          <a href="#partner" className="btn-secondary">For Businesses</a>
        </div>
        <div className="hero__stats">
          {STATS.map(stat => (
            <div key={stat.label} className="hero__stat">
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
