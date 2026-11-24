import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const NAV_ITEMS = [
  { to: '/studentdashboard',              icon: '🏠', label: 'Dashboard', end: true },
  { to: '/studentdashboard/students',     icon: '👥', label: 'Students' },
  { to: '/studentdashboard/registration', icon: '📝', label: 'Registration' },
  { to: '/studentdashboard/about',        icon: 'ℹ️',  label: 'About' },
  { to: '/studentdashboard/settings',     icon: '⚙️',  label: 'Settings' },
]

function Sidebar() {
  return (
    <aside className="sidebar">
      <span className="sidebar__section-title">Main Menu</span>

      <nav className="sidebar__nav">
        {NAV_ITEMS.map(({ to, icon, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `sidebar__link${isActive ? ' active' : ''}`
            }
          >
            <span className="sidebar__icon">{icon}</span>
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar__footer">
        © 2025 Student MS · v1.0
      </div>
    </aside>
  )
}

export default Sidebar
