import { HiGlobe, HiMail, HiKey, HiDatabase, HiColorSwatch } from 'react-icons/hi';

const settingGroups = [
  {
    title: 'General',
    icon: <HiGlobe />,
    settings: [
      { label: 'Site Name', type: 'text', value: 'Blueprint App', placeholder: 'Your app name' },
      { label: 'Site URL', type: 'text', value: 'https://blueprint.dev', placeholder: 'https://...' },
      { label: 'Maintenance Mode', type: 'toggle', value: false },
    ],
  },
  {
    title: 'Email',
    icon: <HiMail />,
    settings: [
      { label: 'SMTP Host', type: 'text', value: 'smtp.gmail.com', placeholder: 'smtp host' },
      { label: 'SMTP Port', type: 'text', value: '587', placeholder: '587' },
      { label: 'From Email', type: 'email', value: 'noreply@blueprint.dev', placeholder: 'noreply@...' },
    ],
  },
  {
    title: 'Security',
    icon: <HiKey />,
    settings: [
      { label: 'JWT Expiry', type: 'text', value: '7d', placeholder: '7d' },
      { label: 'Allow Registration', type: 'toggle', value: true },
      { label: 'Two-Factor Auth', type: 'toggle', value: false },
    ],
  },
];

const Settings = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-sm text-slate-400 mt-1">Configure your application</p>
      </div>

      <div className="space-y-6">
        {settingGroups.map((group, i) => (
          <div key={i} className="rounded-2xl bg-surface-card border border-white/5 overflow-hidden">
            <div className="flex items-center gap-3 px-6 py-4 border-b border-white/5">
              <span className="text-primary text-lg">{group.icon}</span>
              <h2 className="text-lg font-semibold text-white">{group.title}</h2>
            </div>
            <div className="p-6 space-y-5">
              {group.settings.map((setting, j) => (
                <div key={j} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <label className="text-sm font-medium text-slate-300">{setting.label}</label>
                  {setting.type === 'toggle' ? (
                    <button className={`w-11 h-6 rounded-full relative transition-all cursor-pointer ${setting.value ? 'bg-primary' : 'bg-surface-lighter'}`}>
                      <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all ${setting.value ? 'left-5.5' : 'left-0.5'}`} />
                    </button>
                  ) : (
                    <input
                      type={setting.type}
                      defaultValue={setting.value}
                      placeholder={setting.placeholder}
                      className="w-full sm:w-72 px-4 py-2 rounded-xl bg-surface border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 transition-all"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary to-accent text-white text-sm font-medium hover:opacity-90 transition-all cursor-pointer">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;
