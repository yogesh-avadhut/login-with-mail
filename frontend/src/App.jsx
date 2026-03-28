import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import UsersPage from './pages/UsersPage'
import AddUserPage from './pages/AddUserPage'
import VerifyUserPage from './pages/VerifyUserPage'

export default function App() {
  return (
    <div className="layout">
      <Sidebar />

      <main className="main-content">
        <Routes>
        
          <Route path="/"            element={<UsersPage />} />
          <Route path="/add-user"    element={<AddUserPage />} />
          <Route path="/verify-user" element={<VerifyUserPage />} />
        
        </Routes>
      </main>
    </div>
  )
}
