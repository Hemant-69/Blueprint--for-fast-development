import { useAuth } from '../context/AuthContext';
import { HiUser, HiMail, HiCalendar, HiPencil } from 'react-icons/hi';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-white mb-8">Profile</h1>

      {/* Profile card */}
      <div className="p-8 rounded-2xl bg-surface-card/50 border border-white/5">
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-white font-bold text-3xl">{user?.username?.[0]?.toUpperCase() || 'U'}</span>
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-white">{user?.username || 'User'}</h2>
            <p className="text-slate-400">{user?.email || 'user@example.com'}</p>
          </div>
          <button className="sm:ml-auto px-4 py-2 rounded-xl border border-white/10 text-sm text-slate-300 hover:bg-white/5 transition-all flex items-center gap-2 cursor-pointer">
            <HiPencil /> Edit Profile
          </button>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: <HiUser />, label: 'Username', value: user?.username || 'johndoe' },
            { icon: <HiMail />, label: 'Email', value: user?.email || 'user@example.com' },
            { icon: <HiCalendar />, label: 'Joined', value: 'March 2026' },
            { icon: <HiCalendar />, label: 'Role', value: 'Member' },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-xl bg-surface border border-white/5">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-primary">{item.icon}</span>
                <span className="text-xs text-slate-500 uppercase tracking-wider">{item.label}</span>
              </div>
              <p className="text-sm text-white font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
