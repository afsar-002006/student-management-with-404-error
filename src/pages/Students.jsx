import { useState } from 'react'
import './Pages.css'

const STUDENTS = [
  { id: 'S001', name: 'Aarav Sharma',   email: 'aarav@example.com',  course: 'Computer Science',  status: 'active'   },
  { id: 'S002', name: 'Priya Verma',    email: 'priya@example.com',  course: 'Data Science',      status: 'active'   },
  { id: 'S003', name: 'Rahul Mehta',    email: 'rahul@example.com',  course: 'Web Development',   status: 'pending'  },
  { id: 'S004', name: 'Sneha Patel',    email: 'sneha@example.com',  course: 'AI & ML',           status: 'active'   },
  { id: 'S005', name: 'Kiran Joshi',    email: 'kiran@example.com',  course: 'Cybersecurity',     status: 'inactive' },
  { id: 'S006', name: 'Divya Nair',     email: 'divya@example.com',  course: 'Computer Science',  status: 'active'   },
  { id: 'S007', name: 'Arjun Reddy',    email: 'arjun@example.com',  course: 'Data Science',      status: 'pending'  },
]

function Students() {
  const [query, setQuery] = useState('')
  const filtered = STUDENTS.filter(s =>
    s.name.toLowerCase().includes(query.toLowerCase()) ||
    s.course.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="page">
      <div className="page-header" style={{ marginBottom: 24 }}>
        <h1 className="page-header__title">Students 👥</h1>
        <p className="page-header__sub">Manage all student records</p>
      </div>

      <div className="page-card" style={{ padding: '20px 24px' }}>
        <div className="students__toolbar">
          <input
            className="students__search"
            placeholder="🔍  Search students..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button className="btn btn--primary">+ Add Student</button>
        </div>

        <table className="recent-table" style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '30px' }}>
                  No students found.
                </td>
              </tr>
            ) : filtered.map(s => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td><strong>{s.name}</strong></td>
                <td>{s.email}</td>
                <td>{s.course}</td>
                <td><span className={`badge badge--${s.status}`}>{s.status.charAt(0).toUpperCase() + s.status.slice(1)}</span></td>
                <td>
                  <button className="btn btn--outline" style={{ padding: '5px 14px', fontSize: '0.78rem' }}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Students
