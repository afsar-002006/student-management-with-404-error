import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/studentdashboard" className="navbar__logo">
        <span className="navbar__logo-icon">🎓</span>
        Student MS
      </Link>

      <div className="navbar__right">
        <span className="navbar__badge">Academic Year 2025–26</span>
        <div className="navbar__avatar" title="Admin User">A</div>
      </div>
    </header>
  )
}

export default Navbar
