import './StatCard.css'

function StatCard({ title, value, icon, iconBg = '#EDE9FF', change, changeType = 'up' }) {
  return (
    <div className="stat-card">
      <div className="stat-card__icon" style={{ background: iconBg }}>
        {icon}
      </div>
      <div className="stat-card__body">
        <p className="stat-card__label">{title}</p>
        <p className="stat-card__value">{value}</p>
        {change && (
          <p className={`stat-card__change stat-card__change--${changeType}`}>
            {changeType === 'up' ? '▲' : '▼'} {change}
          </p>
        )}
      </div>
    </div>
  )
}

export default StatCard
