import { useAuth } from '../context/AuthContext';
import { HiUsers, HiDocumentText, HiPhotograph, HiTrendingUp } from 'react-icons/hi';

const stats = [
  { label: 'Total Users', value: '1,234', icon: <HiUsers />, color: 'from-primary to-indigo-400' },
  { label: 'Documents', value: '856', icon: <HiDocumentText />, color: 'from-accent to-cyan-400' },
  { label: 'Media Files', value: '342', icon: <HiPhotograph />, color: 'from-amber-500 to-orange-400' },
  { label: 'Growth', value: '+24%', icon: <HiTrendingUp />, color: 'from-success to-emerald-400' },
];

const recentItems = [
  { title: 'New user registered', time: '2 min ago', type: 'user' },
  { title: 'File uploaded: report.pdf', time: '15 min ago', type: 'file' },
  { title: 'Profile updated', time: '1 hour ago', type: 'update' },
  { title: 'New login from Chrome', time: '3 hours ago', type: 'auth' },
  { title: 'Password changed', time: '1 day ago', type: 'security' },
];

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-slate-400 mt-1">Welcome back, {user?.username || 'User'}!</p>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s, i) => (
          <div key={i} className="p-5 rounded-2xl bg-surface-card/50 border border-white/5 hover:border-white/10 transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white text-lg`}>
                {s.icon}
              </div>
            </div>
            <p className="text-2xl font-bold text-white">{s.value}</p>
            <p className="text-sm text-slate-400">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Content grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Activity feed */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-surface-card/50 border border-white/5">
          <h2 className="text-lg font-semibold text-white mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentItems.map((item, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm text-slate-300">{item.title}</span>
                </div>
                <span className="text-xs text-slate-500">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick actions */}
        <div className="p-6 rounded-2xl bg-surface-card/50 border border-white/5">
          <h2 className="text-lg font-semibold text-white mb-4">Quick Actions</h2>
          <div className="space-y-3">
            {['Create Post', 'Upload File', 'Manage Users', 'View Reports'].map((action, i) => (
              <button
                key={i}
                className="w-full px-4 py-3 rounded-xl text-left text-sm text-slate-300 bg-surface hover:bg-surface-lighter border border-white/5 hover:border-white/10 transition-all duration-200 cursor-pointer"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
