import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCursor } from '../context/CursorContext';
import { HiMenuAlt3, HiX, HiCursorClick } from 'react-icons/hi';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { cursorEnabled, toggleCursor } = useCursor();
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
      isActive
        ? 'bg-primary/20 text-primary-light'
        : 'text-slate-300 hover:text-white hover:bg-white/5'
    }`;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4 pointer-events-none">
      <nav className="max-w-7xl mx-auto backdrop-blur-xl bg-surface/80 border border-white/10 rounded-2xl shadow-xl shadow-black/20 pointer-events-auto">
        <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-white font-bold text-lg">Blueprint</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            <button
              onClick={toggleCursor}
              className={`p-2 mr-2 rounded-lg transition-all duration-200 cursor-pointer ${
                cursorEnabled
                  ? 'bg-primary/20 text-primary-light'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
              title={cursorEnabled ? "Disable Custom Cursor" : "Enable Custom Cursor"}
            >
              <HiCursorClick size={20} />
            </button>
            <NavLink to="/" className={navLinkClass} end>Home</NavLink>
            <NavLink to="/album" className={navLinkClass}>Album</NavLink>
            {isAuthenticated ? (
              <>
                <NavLink to="/dashboard" className={navLinkClass}>Dashboard</NavLink>
                <NavLink to="/profile" className={navLinkClass}>Profile</NavLink>
                <div className="ml-3 flex items-center gap-3">
                  <span className="text-sm text-slate-400">Hi, {user?.username}</span>
                  <button
                    onClick={logout}
                    className="px-4 py-2 rounded-lg text-sm font-medium bg-danger/10 text-danger hover:bg-danger/20 transition-all duration-200 cursor-pointer"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <div className="ml-3 flex items-center gap-2">
                <NavLink to="/login" className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-200">
                  Login
                </NavLink>
                <NavLink to="/register" className="px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 transition-all duration-200">
                  Register
                </NavLink>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2 cursor-pointer">
            {open ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="md:hidden pb-4 space-y-1 animate-in fade-in">
            <button
              onClick={() => { toggleCursor(); setOpen(false); }}
              className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all flex items-center gap-2 cursor-pointer"
            >
              <HiCursorClick size={18} />
              {cursorEnabled ? 'Disable Custom Cursor' : 'Enable Custom Cursor'}
            </button>
            <NavLink to="/" className={navLinkClass} end onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/album" className={navLinkClass} onClick={() => setOpen(false)}>Album</NavLink>
            {isAuthenticated ? (
              <>
                <NavLink to="/dashboard" className={navLinkClass} onClick={() => setOpen(false)}>Dashboard</NavLink>
                <NavLink to="/profile" className={navLinkClass} onClick={() => setOpen(false)}>Profile</NavLink>
                <button
                  onClick={() => { logout(); setOpen(false); }}
                  className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-danger hover:bg-danger/10 transition-all cursor-pointer"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" className={navLinkClass} onClick={() => setOpen(false)}>Login</NavLink>
                <NavLink to="/register" className={navLinkClass} onClick={() => setOpen(false)}>Register</NavLink>
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
