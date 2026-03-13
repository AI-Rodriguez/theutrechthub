import './CommunityStats.css'

const STATS = [
  { value: '43,219', label: 'Community Members' },
  { value: '14,152', label: 'Active Monthly' },
  { value: '10+', label: 'Years Running' },
  { value: '~10', label: 'New Members Daily' },
]

export default function CommunityStats() {
  return (
    <section className="community-stats">
      <div className="container">
        <div className="community-stats__grid">
          {STATS.map(stat => (
            <div key={stat.label} className="community-stats__item">
              <span className="community-stats__value">{stat.value}</span>
              <span className="community-stats__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
