import StatCard from '../components/StatCard.jsx'
import './Dashboard.css'

const RECENT_STUDENTS = [
  { id: 'S001', name: 'Aarav Sharma',   course: 'Computer Science',  status: 'active'   },
  { id: 'S002', name: 'Priya Verma',    course: 'Data Science',      status: 'active'   },
  { id: 'S003', name: 'Rahul Mehta',    course: 'Web Development',   status: 'pending'  },
  { id: 'S004', name: 'Sneha Patel',    course: 'AI & ML',           status: 'active'   },
  { id: 'S005', name: 'Kiran Joshi',    course: 'Cybersecurity',     status: 'inactive' },
]

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="page-header">
        <h1 className="page-header__title">Dashboard 🏠</h1>
        <p className="page-header__sub">Welcome back, Admin! Here's what's happening today.</p>
      </div>

      <div className="stats-grid">
        <StatCard title="Total Students"    value="1,248" icon="👥" iconBg="#EDE9FF" change="+12 this week" changeType="up" />
        <StatCard title="Active Courses"    value="34"    icon="📚" iconBg="#E0F7F7" change="+2 new"        changeType="up" />
        <StatCard title="Registrations"     value="89"    icon="📝" iconBg="#FFF0E9" change="+24 pending"   changeType="up" />
        <StatCard title="Completion Rate"   value="92%"   icon="✅" iconBg="#E9F9EE" change="+3% vs last"  changeType="up" />
      </div>

      <div className="dashboard__section-title">Recent Students</div>
      <div className="dashboard__recent">
        <table className="recent-table">
          <thead>
            <tr>
              <th>ID</th><th>Name</th><th>Course</th><th>Status</th>
            </tr>
          </thead>
          <tbody>
            {RECENT_STUDENTS.map(s => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.course}</td>
                <td>
                  <span className={`badge badge--${s.status}`}>
                    {s.status.charAt(0).toUpperCase() + s.status.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard
