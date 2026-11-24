import './Pages.css'

function About() {
  return (
    <div className="page">
      <div className="page-header" style={{ marginBottom: 24 }}>
        <h1 className="page-header__title">About ℹ️</h1>
        <p className="page-header__sub">Learn about this Student Management System</p>
      </div>

      <div className="page-card">
        <div className="about__hero">
          <div className="about__logo">🎓</div>
          <div className="about__meta">
            <h2>Student Management System</h2>
            <p>Version 1.0.0 · Academic Year 2025–26</p>
          </div>
        </div>

        <p className="about__desc">
          A modern, full-featured Student Management System built with React and React Router DOM.
          This platform helps administrators efficiently manage student records, registrations,
          course assignments, and academic progress — all in one place.
        </p>

        <div className="about__features">
          {[
            { icon: '📊', title: 'Real-time Dashboard',  desc: 'Live stats and analytics' },
            { icon: '👥', title: 'Student Management',   desc: 'Complete student profiles' },
            { icon: '📝', title: 'Easy Registration',    desc: 'Streamlined enrollment' },
            { icon: '⚙️', title: 'Configurable',         desc: 'Flexible system settings' },
            { icon: '🔒', title: 'Secure Access',        desc: 'Role-based permissions' },
            { icon: '📱', title: 'Responsive Design',    desc: 'Works on any device' },
          ].map(f => (
            <div className="about__feature" key={f.title}>
              <span className="about__feature-icon">{f.icon}</span>
              <div className="about__feature-text">
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
