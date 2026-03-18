import { useState } from 'react';
import { HiSearch, HiPlus, HiPencil, HiTrash } from 'react-icons/hi';

const dummyUsers = [
  { id: 1, username: 'alice_dev', email: 'alice@example.com', role: 'Admin', status: 'Active', joined: '2026-01-15' },
  { id: 2, username: 'bob_smith', email: 'bob@example.com', role: 'User', status: 'Active', joined: '2026-02-01' },
  { id: 3, username: 'charlie_b', email: 'charlie@example.com', role: 'User', status: 'Inactive', joined: '2026-02-10' },
  { id: 4, username: 'diana_wp', email: 'diana@example.com', role: 'Moderator', status: 'Active', joined: '2026-02-20' },
  { id: 5, username: 'eve_w', email: 'eve@example.com', role: 'User', status: 'Active', joined: '2026-03-01' },
  { id: 6, username: 'frank_z', email: 'frank@example.com', role: 'User', status: 'Banned', joined: '2026-03-05' },
];

const ManageUsers = () => {
  const [search, setSearch] = useState('');

  const filtered = dummyUsers.filter(u =>
    u.username.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  const statusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-success/10 text-success';
      case 'Inactive': return 'bg-slate-500/10 text-slate-400';
      case 'Banned': return 'bg-danger/10 text-danger';
      default: return 'bg-slate-500/10 text-slate-400';
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Manage Users</h1>
          <p className="text-sm text-slate-400 mt-1">{dummyUsers.length} total users</p>
        </div>
        <button className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary to-accent text-white text-sm font-medium hover:opacity-90 transition-all flex items-center gap-2 cursor-pointer">
          <HiPlus /> Add User
        </button>
      </div>

      {/* Search */}
      <div className="relative w-full sm:w-80 mb-6">
        <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface-card border border-white/5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary/30 transition-all"
        />
      </div>

      {/* Table */}
      <div className="rounded-2xl bg-surface-card border border-white/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/5">
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">User</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">Email</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">Role</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">Status</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">Joined</th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((u) => (
                <tr key={u.id} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-surface-lighter flex items-center justify-center text-sm font-semibold text-slate-300">
                        {u.username[0].toUpperCase()}
                      </div>
                      <span className="text-sm font-medium text-white">{u.username}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400">{u.email}</td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary-light">{u.role}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColor(u.status)}`}>{u.status}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400">{u.joined}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/10 transition-all cursor-pointer">
                        <HiPencil />
                      </button>
                      <button className="p-1.5 rounded-lg text-slate-400 hover:text-danger hover:bg-danger/10 transition-all cursor-pointer">
                        <HiTrash />
                      </button>
                    </div>
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

export default ManageUsers;
