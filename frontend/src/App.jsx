import { useState, useCallback } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'
import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Album from './pages/Album'
import NotFound from './pages/NotFound'
import Feedback from './pages/Feedback'
import About from './pages/About'
import Departments from './pages/Departments'
import Admissions from './pages/Admissions'
import Notices from './pages/Notices'
import Contact from './pages/Contact'

function App() {
  const [loading, setLoading] = useState(true)
  const handleLoaderDone = useCallback(() => setLoading(false), [])

  return (
    <>
      <CustomCursor />
      {loading && <Loader onDone={handleLoaderDone} />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="departments" element={<Departments />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="notices" element={<Notices />} />
          <Route path="contact" element={<Contact />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="album" element={<Album />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
