import { HiUsers, HiDocumentText, HiShoppingCart, HiTrendingUp, HiArrowUp, HiArrowDown } from 'react-icons/hi';

const stats = [
  { label: 'Total Users', value: '2,847', change: '+12.5%', up: true, icon: <HiUsers />, color: 'from-primary to-indigo-400' },
  { label: 'Orders', value: '1,234', change: '+8.2%', up: true, icon: <HiShoppingCart />, color: 'from-accent to-cyan-400' },
  { label: 'Revenue', value: '$45.2K', change: '-3.1%', up: false, icon: <HiTrendingUp />, color: 'from-success to-emerald-400' },
  { label: 'Content', value: '568', change: '+24%', up: true, icon: <HiDocumentText />, color: 'from-amber-500 to-orange-400' },
];

const recentUsers = [
  { name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active' },
  { name: 'Bob Smith', email: 'bob@example.com', role: 'User', status: 'Active' },
  { name: 'Charlie Brown', email: 'charlie@example.com', role: 'User', status: 'Inactive' },
  { name: 'Diana Prince', email: 'diana@example.com', role: 'Moderator', status: 'Active' },
  { name: 'Eve Williams', email: 'eve@example.com', role: 'User', status: 'Active' },
];

const Dashboard = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-sm text-slate-400 mt-1">Overview of your application</p>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {stats.map((s, i) => (
          <div key={i} className="p-5 rounded-2xl bg-surface-card border border-white/5 hover:border-white/10 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white text-lg`}>
                {s.icon}
              </div>
              <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${s.up ? 'text-success bg-success/10' : 'text-danger bg-danger/10'}`}>
                {s.up ? <HiArrowUp /> : <HiArrowDown />} {s.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-white">{s.value}</p>
            <p className="text-sm text-slate-400">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Recent users table */}
      <div className="rounded-2xl bg-surface-card border border-white/5 overflow-hidden">
        <div className="px-6 py-4 border-b border-white/5">
          <h2 className="text-lg font-semibold text-white">Recent Users</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/5">
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">Name</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">Email</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">Role</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentUsers.map((u, i) => (
                <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-surface-lighter flex items-center justify-center text-sm font-semibold text-slate-300">
                        {u.name[0]}
                      </div>
                      <span className="text-sm font-medium text-white">{u.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400">{u.email}</td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary-light">{u.role}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${u.status === 'Active' ? 'bg-success/10 text-success' : 'bg-slate-500/10 text-slate-400'}`}>
                      {u.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
