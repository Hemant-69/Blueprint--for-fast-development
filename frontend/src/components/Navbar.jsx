import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCursor } from '../context/CursorContext';
import {
  HiMenuAlt3,
  HiX,
  HiCursorClick,
  HiPhone,
  HiMail
} from 'react-icons/hi';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { cursorEnabled, toggleCursor } = useCursor();
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
      isActive
        ? 'text-primary-light'
        : 'text-slate-300 hover:text-white'
    }`;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">

      {/* 🔴 TOP INFO BAR */}
      <div className="bg-primary text-white text-xs py-2 px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <HiPhone /> +91-1234567890
          </span>
          <span className="flex items-center gap-1">
            <HiMail /> info@sietnilokheri.ac.in
          </span>
        </div>
        <span className="hidden sm:block">
          📢 Admissions Open 2026
        </span>
      </div>

      {/* 🔴 MAIN NAVBAR */}
      <nav className="backdrop-blur-xl bg-black/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <div className="leading-tight">
                <p className="text-white font-bold text-sm">
                  SIET Nilokheri
                </p>
                <p className="text-slate-400 text-xs">
                  Karnal, Haryana
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4">

              <NavLink to="/" className={navLinkClass} end>Home</NavLink>
              <NavLink to="/about" className={navLinkClass}>About</NavLink>
              <NavLink to="/departments" className={navLinkClass}>Departments</NavLink>
              <NavLink to="/admissions" className={navLinkClass}>Admissions</NavLink>
              <NavLink to="/notices" className={navLinkClass}>Notices</NavLink>
              <NavLink to="/album" className={navLinkClass}>Gallery</NavLink>

              {/* Cursor Toggle */}
              <button
                onClick={toggleCursor}
                className={`p-2 rounded-lg ${
                  cursorEnabled
                    ? 'bg-primary/20 text-primary-light'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <HiCursorClick />
              </button>

              {/* Auth */}
              {isAuthenticated ? (
                <div className="ml-4 flex items-center gap-3">
                  <span className="text-sm text-slate-400">
                    Hi, {user?.username}
                  </span>
                  <button
                    onClick={logout}
                    className="px-4 py-2 rounded-lg text-sm bg-danger/10 text-danger hover:bg-danger/20"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex gap-2 ml-4">
                  <NavLink
                    to="/login"
                    className="px-4 py-2 text-sm border border-white/10 rounded-lg text-slate-300 hover:bg-white/10"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-primary to-accent text-white"
                  >
                    Apply Now
                  </NavLink>
                </div>
              )}
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white p-2"
            >
              {open ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden py-4 space-y-2 border-t border-white/10">

              <NavLink to="/" className={navLinkClass} onClick={() => setOpen(false)}>Home</NavLink>
              <NavLink to="/about" className={navLinkClass} onClick={() => setOpen(false)}>About</NavLink>
              <NavLink to="/departments" className={navLinkClass} onClick={() => setOpen(false)}>Departments</NavLink>
              <NavLink to="/admissions" className={navLinkClass} onClick={() => setOpen(false)}>Admissions</NavLink>
              <NavLink to="/notices" className={navLinkClass} onClick={() => setOpen(false)}>Notices</NavLink>
              <NavLink to="/album" className={navLinkClass} onClick={() => setOpen(false)}>Gallery</NavLink>

              <button
                onClick={() => { toggleCursor(); setOpen(false); }}
                className="w-full text-left px-3 py-2 text-slate-300"
              >
                {cursorEnabled ? 'Disable Cursor' : 'Enable Cursor'}
              </button>

              {isAuthenticated ? (
                <button
                  onClick={() => { logout(); setOpen(false); }}
                  className="w-full text-left px-3 py-2 text-danger"
                >
                  Logout
                </button>
              ) : (
                <>
                  <NavLink to="/login" className={navLinkClass} onClick={() => setOpen(false)}>Login</NavLink>
                  <NavLink to="/register" className={navLinkClass} onClick={() => setOpen(false)}>Apply Now</NavLink>
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