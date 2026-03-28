import { useEffect, useState } from 'react'
import { getAllUsers } from '../api/userApi'

export default function UsersPage() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    getAllUsers()
      .then((res) => {

        setUsers(res.data.data || [])
      })

      .catch((err) => {
        setError('Failed to fetch users. Is your backend running on port 3000?')

        console.error(err)
      })

      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p className="loading">Loading users...</p>

  return (
    <div>
      <h1 className="page-title">All Users</h1>

      {error && <p className="msg-error">{error}</p>}

      <div className="card">
        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <table>
            <thead>
              <tr>

                <th>#</th>
                <th>Username</th>
                <th>Email</th>
                <th>Verified</th>
                <th>Created At</th>

              </tr>
            </thead>
            <tbody>

              {users.map((user, index) => (
              
              <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.userName}</td>
                  <td>{user.email}</td>
                  <td>

                    <span className={`badge ${user.isVerified ? 'badge-yes' : 'badge-no'}`}>
                      {user.isVerified ? 'Yes' : 'No'}
                    </span>
                  </td>
                  <td>{new Date(user.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
