import { NavLink } from 'react-router-dom';
import { HiViewGrid, HiUsers, HiCog, HiLogout, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const links = [
  { to: '/', icon: <HiViewGrid />, label: 'Dashboard' },
  { to: '/users', icon: <HiUsers />, label: 'Users' },
  { to: '/settings', icon: <HiCog />, label: 'Settings' },
];

const Sidebar = ({ collapsed, setCollapsed }) => {
  return (
    <aside className={`fixed left-0 top-0 h-screen bg-sidebar border-r border-white/5 flex flex-col transition-all duration-300 z-40 ${collapsed ? 'w-16' : 'w-60'}`}>
      {/* Logo */}
      <div className="flex items-center gap-3 h-16 px-4 border-b border-white/5">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-sm">B</span>
        </div>
        {!collapsed && <span className="text-white font-bold text-lg">Admin</span>}
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 px-2 space-y-1">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-primary/15 text-primary-light'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              } ${collapsed ? 'justify-center' : ''}`
            }
          >
            <span className="text-lg">{link.icon}</span>
            {!collapsed && <span>{link.label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Bottom */}
      <div className="p-2 border-t border-white/5 space-y-1">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm text-slate-500 hover:text-white hover:bg-white/5 transition-all cursor-pointer ${collapsed ? 'justify-center' : ''}`}
        >
          {collapsed ? <HiChevronRight className="text-lg" /> : <><HiChevronLeft className="text-lg" /><span>Collapse</span></>}
        </button>
        <button
          className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm text-danger hover:bg-danger/10 transition-all cursor-pointer ${collapsed ? 'justify-center' : ''}`}
        >
          <HiLogout className="text-lg" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
