

import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (

    <aside className="sidebar">
      <h2>User Dashboard</h2>
      <nav>
        <NavLink to="/">All Users</NavLink>

        <NavLink to="/add-user">Add User</NavLink>
        
        <NavLink to="/verify-user">Verify User</NavLink>
     
      </nav>
    
    </aside>
  )
}
