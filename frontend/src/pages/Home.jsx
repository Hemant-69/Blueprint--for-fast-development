import { Link } from 'react-router-dom';
import { HiArrowRight, HiCode, HiLightningBolt, HiShieldCheck } from 'react-icons/hi';

const features = [
  {
    icon: <HiLightningBolt className="text-2xl" />,
    title: 'Lightning Fast',
    desc: 'Powered by Vite for instant HMR and blazing fast builds.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: <HiCode className="text-2xl" />,
    title: 'Modern Stack',
    desc: 'React 19, Tailwind CSS v4, Express 5, MongoDB — all latest.',
    color: 'from-primary to-accent',
  },
  {
    icon: <HiShieldCheck className="text-2xl" />,
    title: 'Auth Ready',
    desc: 'JWT authentication, protected routes, and middleware built-in.',
    color: 'from-success to-emerald-400',
  },
];

const Home = () => {
  return (
    <div className="relative">
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Ready-to-use starter template
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
            <span className="text-white">Build faster with</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary-light bg-clip-text text-transparent">
              Blueprint
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            A full-stack development blueprint with authentication, CRUD operations,
            file uploads, and a beautiful dark UI — ready to clone and start coding.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register"
              className="group px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold text-sm hover:opacity-90 transition-all duration-200 flex items-center gap-2"
            >
              Get Started
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/login"
              className="px-8 py-3.5 rounded-xl border border-white/10 text-slate-300 font-semibold text-sm hover:bg-white/5 hover:border-white/20 transition-all duration-200"
            >
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group p-6 rounded-2xl bg-surface-card/50 border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white mb-4`}>
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center">
          <p className="text-sm text-slate-500 mb-6 uppercase tracking-widest font-medium">Built with</p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-slate-500">
            {['React', 'Vite', 'Tailwind', 'Express', 'MongoDB', 'JWT'].map(t => (
              <span key={t} className="text-sm font-medium px-4 py-2 rounded-lg bg-surface-light/50 border border-white/5">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
