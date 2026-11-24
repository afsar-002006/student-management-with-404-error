import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Sidebar from '../components/Sidebar.jsx'
import './DashboardLayout.css'

function DashboardLayout() {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout__body">
        <Sidebar />
        <main className="layout__content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
