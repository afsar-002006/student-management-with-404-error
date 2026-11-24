import { useState } from 'react'
import './Pages.css'

function Toggle({ defaultChecked = false }) {
  const [on, setOn] = useState(defaultChecked)
  return (
    <label className="toggle">
      <input type="checkbox" checked={on} onChange={() => setOn(v => !v)} />
      <span className="toggle__slider" />
    </label>
  )
}

const SETTINGS_ROWS = [
  { title: 'Email Notifications',   desc: 'Receive alerts for new registrations',  defaultOn: true  },
  { title: 'Dark Mode',             desc: 'Enable dark theme across the system',   defaultOn: false },
  { title: 'Auto-save Forms',       desc: 'Automatically save form drafts',        defaultOn: true  },
  { title: 'Show Student Photos',   desc: 'Display profile photos in student list',defaultOn: true  },
  { title: 'Two-Factor Auth',       desc: 'Require 2FA on login',                  defaultOn: false },
]

function Settings() {
  return (
    <div className="page">
      <div className="page-header" style={{ marginBottom: 24 }}>
        <h1 className="page-header__title">Settings ⚙️</h1>
        <p className="page-header__sub">Configure your system preferences</p>
      </div>

      <div className="page-card">
        <div className="settings__section-title">Preferences</div>
        {SETTINGS_ROWS.map(r => (
          <div className="settings-row" key={r.title}>
            <div className="settings-row__info">
              <h4>{r.title}</h4>
              <p>{r.desc}</p>
            </div>
            <Toggle defaultChecked={r.defaultOn} />
          </div>
        ))}
      </div>

      <div className="page-card">
        <div className="settings__section-title">System Info</div>
        {[
          ['Version',       'v1.0.0'],
          ['Framework',     'React 18 + React Router DOM v6'],
          ['Build Tool',    'Vite'],
          ['Academic Year', '2025–26'],
          ['Support Email', 'support@studentms.com'],
        ].map(([k, v]) => (
          <div className="settings-row" key={k}>
            <div className="settings-row__info"><h4>{k}</h4></div>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>{v}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Settings
