import { useState } from 'react'
import { verifyUser } from '../api/userApi'

export default function VerifyUserPage() {
  const [code, setCode] = useState('')

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    
    setSuccess('')
    setError('')

    try {
      const res = await verifyUser({ code })
      const data = res.data

      if (data.error) {
        setError(data.errmsg || data.message)
      }
       else {
        setSuccess('Email verified successfully! Welcome email has been sent.')
        setCode('') 
      }
    } 
    catch (err) {
      setError('Request failed. Is your backend running?')
      console.error(err)
    }
     finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1 className="page-title">Verify User</h1>

      <div className="card">
    
        <p style={{ marginBottom: '16px', color: '#555' }}>
          Enter the 6-digit verification code that was sent to the user's email.
        </p>

        <form onSubmit={handleSubmit}>
    
          <div className="form-group">
            <label>Verification Code</label>
    
            <input
              name="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              maxLength={6}
              required
            />
    
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Verifying...' : 'Verify'}
          </button>

    
          {success && <p className="msg-success">{success}</p>}
          {error   && <p className="msg-error">{error}</p>}
    
        </form>
      </div>
    </div>
  )
}
