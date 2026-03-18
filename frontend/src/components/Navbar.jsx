import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCursor } from '../context/CursorContext';
import { useTheme } from '../context/ThemeContext';
import {
  HiMenuAlt3,
  HiX,
  HiCursorClick,
  HiPhone,
  HiMail,
  HiSun,
  HiMoon,
} from 'react-icons/hi';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { cursorEnabled, toggleCursor } = useCursor();
  const { isDark, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `nav-link ${isActive ? 'active' : ''}`;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">

      {/* TOP INFO BAR */}
      <div
        style={{
          background: 'var(--accent)',
          color: 'white',
          fontSize: '0.75rem',
          padding: '0.4rem 1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <HiPhone /> +91-1234567890
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <HiMail /> info@sietnilokheri.ac.in
          </span>
        </div>
        <span className="hidden sm:block">
          📢 Admissions Open 2026 – Apply Now | Last Date: 30 April
        </span>
      </div>

      {/* MAIN NAVBAR */}
      <nav
        style={{
          background: 'var(--bg-navbar)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--border-color)',
          boxShadow: isDark ? '0 4px 20px rgba(0,0,0,0.4)' : '0 4px 20px rgba(0,0,0,0.08)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img className="w-10 h-10 rounded-xl" src="logo.png" alt="SIET Logo" />
              <div style={{ lineHeight: '1.2' }}>
                <p style={{ color: 'var(--text-primary)', fontWeight: '700', fontSize: '0.875rem' }}>
                  SIET Nilokheri
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.7rem' }}>
                  Karnal, Haryana
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              <NavLink to="/" className={navLinkClass} end>Home</NavLink>
              <NavLink to="/about" className={navLinkClass}>About</NavLink>
              <NavLink to="/departments" className={navLinkClass}>Departments</NavLink>
              <NavLink to="/admissions" className={navLinkClass}>Admissions</NavLink>
              <NavLink to="/notices" className={navLinkClass}>Notices</NavLink>
              <NavLink to="/album" className={navLinkClass}>Gallery</NavLink>
              <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
              <NavLink to="/feedback" className={navLinkClass}>Feedback</NavLink>
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="theme-toggle"
                title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDark ? <HiSun /> : <HiMoon />}
              </button>

              {/* Cursor Toggle (desktop only) */}
              <button
                onClick={toggleCursor}
                className="theme-toggle hidden md:flex"
                title={cursorEnabled ? 'Disable Custom Cursor' : 'Enable Custom Cursor'}
                style={cursorEnabled ? { color: 'var(--accent-light)', borderColor: 'var(--accent)' } : {}}
              >
                <HiCursorClick />
              </button>

              {/* Auth */}
              {isAuthenticated ? (
                <div className="hidden md:flex items-center gap-2 ml-2">
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                    Hi, {user?.username}
                  </span>
                  <button
                    onClick={logout}
                    className="btn-outline"
                    style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="hidden md:flex gap-2 ml-2">
                  <NavLink
                    to="/login"
                    className="btn-outline"
                    style={{ padding: '0.4rem 1rem', fontSize: '0.8rem', textDecoration: 'none' }}
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="btn-primary"
                    style={{ padding: '0.4rem 1rem', fontSize: '0.8rem', textDecoration: 'none' }}
                  >
                    Apply Now
                  </NavLink>
                </div>
              )}

              {/* Mobile Hamburger */}
              <button
                onClick={() => setOpen(!open)}
                className="md:hidden  theme-toggle"
              >
                {open ? <HiX size={18} /> : <HiMenuAlt3 size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div
              style={{
                borderTop: '1px solid var(--border-color)',
                padding: '1rem 0',
              }}
              className="md:hidden space-y-1"
            >
              {[
                ['/', 'Home', true],
                ['/about', 'About'],
                ['/departments', 'Departments'],
                ['/admissions', 'Admissions'],
                ['/notices', 'Notices'],
                ['/album', 'Gallery'],
                ['/contact', 'Contact'],
                ['/feedback', 'Feedback'],
              ].map(([path, label, end]) => (
                <NavLink
                  key={path}
                  to={path}
                  end={end}
                  className={navLinkClass}
                  onClick={() => setOpen(false)}
                  style={{ display: 'block' }}
                >
                  {label}
                </NavLink>
              ))}

              <button
                onClick={() => { toggleCursor(); setOpen(false); }}
                className="nav-link"
                style={{ width: '100%', textAlign: 'left' }}
              >
                {cursorEnabled ? '🖱 Disable Cursor' : '🖱 Enable Cursor'}
              </button>

              {isAuthenticated ? (
                <button
                  onClick={() => { logout(); setOpen(false); }}
                  className="nav-link w-full text-left"
                  style={{ color: 'var(--accent-light)' }}
                >
                  Logout
                </button>
              ) : (
                <>
                  <NavLink to="/login" className={navLinkClass} onClick={() => setOpen(false)} style={{ display: 'block' }}>Login</NavLink>
                  <NavLink to="/register" className={navLinkClass} onClick={() => setOpen(false)} style={{ display: 'block' }}>Apply Now</NavLink>
                </>
              )}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;