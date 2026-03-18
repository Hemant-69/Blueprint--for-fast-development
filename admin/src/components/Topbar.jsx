import { HiBell, HiSearch } from 'react-icons/hi';

const Topbar = () => {
  return (
    <header className="sticky top-0 z-30 h-16 bg-surface/80 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-6">
      {/* Search */}
      <div className="relative w-80 hidden sm:block">
        <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 rounded-xl bg-surface-light border border-white/5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary/30 transition-all"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4 ml-auto">
        <button className="relative p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all cursor-pointer">
          <HiBell className="text-xl" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary" />
        </button>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-white font-semibold text-xs">A</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-white leading-none">Admin</p>
            <p className="text-xs text-slate-500 mt-0.5">admin@blueprint.dev</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
