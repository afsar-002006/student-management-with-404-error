import { Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import About from './pages/About.jsx'
import Students from './pages/Students.jsx'
import Registration from './pages/Registration.jsx'
import Settings from './pages/Settings.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <Routes>
      {/* Redirect root to dashboard */}
      <Route path="/" element={<Navigate to="/studentdashboard" replace />} />

      {/* Dashboard layout wraps all valid student routes */}
      <Route path="/studentdashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="about"        element={<About />} />
        <Route path="students"     element={<Students />} />
        <Route path="registration" element={<Registration />} />
        <Route path="settings"     element={<Settings />} />

        {/* Any unknown nested route under /studentdashboard */}
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Any completely unknown top-level route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
