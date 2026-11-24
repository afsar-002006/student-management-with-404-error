import { useNavigate } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="nf">
      <div className="nf__card">

        <div className="nf__code">404</div>

        <h1 className="nf__heading">Oops! Page Not Found</h1>

        <p className="nf__desc">
          The page you are looking for doesn&apos;t exist or may have been moved.
        </p>

        <div className="nf__actions">
          <button
            className="nf__btn nf__btn--primary"
            onClick={() => navigate('/studentdashboard')}
          >
            🏠 Back to Dashboard
          </button>

          <button
            className="nf__btn nf__btn--outline"
            onClick={() => navigate(-1)}
          >
            ← Go Back
          </button>
        </div>

      </div>
    </div>
  )
}

export default NotFound
