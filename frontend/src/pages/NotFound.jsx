import { Link } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          404
        </h1>
        <p className="text-xl text-slate-400 mt-4 mb-8">Page not found</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-light border border-white/10 text-sm text-slate-300 hover:bg-surface-lighter hover:border-white/20 transition-all"
        >
          <HiHome /> Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
