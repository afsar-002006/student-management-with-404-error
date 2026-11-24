import { useState } from 'react'
import './Pages.css'

function Registration() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    dob: '', gender: '', course: '', batch: '', address: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3500)
    setForm({ firstName: '', lastName: '', email: '', phone: '', dob: '', gender: '', course: '', batch: '', address: '' })
  }

  return (
    <div className="page">
      <div className="page-header" style={{ marginBottom: 24 }}>
        <h1 className="page-header__title">Registration 📝</h1>
        <p className="page-header__sub">Enroll a new student into the system</p>
      </div>

      {submitted && (
        <div style={{
          background: 'rgba(34,197,94,0.12)', border: '1px solid var(--success)',
          borderRadius: 12, padding: '14px 20px', marginBottom: 20,
          color: 'var(--success)', fontWeight: 600, fontSize: '0.9rem'
        }}>
          ✅ Student registered successfully!
        </div>
      )}

      <div className="page-card">
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">First Name <span>*</span></label>
              <input name="firstName" required value={form.firstName} onChange={handleChange} className="form-input" placeholder="e.g. Aarav" />
            </div>
            <div className="form-group">
              <label className="form-label">Last Name <span>*</span></label>
              <input name="lastName" required value={form.lastName} onChange={handleChange} className="form-input" placeholder="e.g. Sharma" />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address <span>*</span></label>
              <input name="email" type="email" required value={form.email} onChange={handleChange} className="form-input" placeholder="student@example.com" />
            </div>
            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input name="phone" value={form.phone} onChange={handleChange} className="form-input" placeholder="+91 00000 00000" />
            </div>
            <div className="form-group">
              <label className="form-label">Date of Birth</label>
              <input name="dob" type="date" value={form.dob} onChange={handleChange} className="form-input" />
            </div>
            <div className="form-group">
              <label className="form-label">Gender</label>
              <select name="gender" value={form.gender} onChange={handleChange} className="form-select">
                <option value="">Select gender</option>
                <option>Male</option><option>Female</option><option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Course <span>*</span></label>
              <select name="course" required value={form.course} onChange={handleChange} className="form-select">
                <option value="">Select course</option>
                <option>Computer Science</option>
                <option>Data Science</option>
                <option>Web Development</option>
                <option>AI &amp; ML</option>
                <option>Cybersecurity</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Batch Year</label>
              <select name="batch" value={form.batch} onChange={handleChange} className="form-select">
                <option value="">Select batch</option>
                <option>2024–25</option><option>2025–26</option><option>2026–27</option>
              </select>
            </div>
            <div className="form-group form-group--full">
              <label className="form-label">Address</label>
              <textarea name="address" value={form.address} onChange={handleChange} className="form-textarea" placeholder="Full address..." />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn--primary">Register Student</button>
            <button type="reset" className="btn btn--outline" onClick={() => setForm({ firstName: '', lastName: '', email: '', phone: '', dob: '', gender: '', course: '', batch: '', address: '' })}>
              Clear Form
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Registration
