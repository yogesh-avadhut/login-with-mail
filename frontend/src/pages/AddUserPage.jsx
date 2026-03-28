import { useState } from 'react'
import { addUser } from '../api/userApi'

export default function AddUserPage() {
  const [form, setForm] = useState({ userName: '', email: '', password: '' })

  const [loading, setLoading] = useState(false)

  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {

    e.preventDefault()
    setLoading(true)
    setSuccess('')
    setError('')

    try {
      const res = await addUser(form)
     
      const data = res.data

      if (data.error) {

        setError(data.errmsg || data.message)
      } 
      else {
        setSuccess(`User "${form.userName}" created! Check email for verification code.`)
      
        setForm({ userName: '', email: '', password: '' })
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
      <h1 className="page-title">Add User</h1>

      <div className="card">
      
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
      
            <input
              name="userName"
              value={form.userName}
              onChange={handleChange}
              required
            />
      
          </div>

          <div className="form-group">
            <label>Email</label>
      
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
      
          </div>

          <div className="form-group">
            <label>Password</label>
      
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>


          <button type="submit" disabled={loading}>
            {loading ? 'Creating...' : 'Create User'}
          </button>

          {success && <p className="msg-success">{success}</p>}

          {error   && <p className="msg-error">{error}</p>}
        </form>
      </div>
    </div>
  )
}
