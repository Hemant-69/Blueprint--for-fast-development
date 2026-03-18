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
          <Route path="album" element={<Album />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="feedback" element={<Feedback />} /> 
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
