import { Link } from 'react-router-dom';
import {
  HiArrowRight,
  HiAcademicCap,
  HiLightningBolt,
  HiShieldCheck,
  HiCog,
} from 'react-icons/hi';

const features = [
  {
    icon: <HiLightningBolt className="text-2xl" />,
    title: 'Applied Science',
    desc: 'Strong foundation in Physics, Chemistry & Mathematics.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: <HiAcademicCap className="text-2xl" />,
    title: 'Computer Engineering',
    desc: 'Modern curriculum with AI, Web & Software Development.',
    color: 'from-primary to-accent',
  },
  {
    icon: <HiShieldCheck className="text-2xl" />,
    title: 'Electrical Engineering',
    desc: 'Focus on power systems, automation & core engineering.',
    color: 'from-success to-emerald-400',
  },
  {
    icon: <HiCog className="text-2xl" />,
    title: 'Mechanical Engineering',
    desc: 'Hands-on learning with workshops & real-world projects.',
    color: 'from-primary to-accent',
  },
];

const Home = () => {
  return (
    <div className="relative">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585"
          alt="college"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Live Notice */}
      <div className="relative z-10 bg-primary text-white text-sm py-2 text-center">
        📢 Admissions Open 2026 – Apply Now | Last Date: 30 April
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 text-center">

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          <span className="text-white">
            State Institute of Engineering & Technology
          </span>
          <br />
          <span className="text-primary-light">
            Nilokheri, Karnal
          </span>
        </h1>

        <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
          राज्य अभियांत्रिकी एवं प्रौद्योगिकी संस्थान, निलोखेड़ी (करनाल)
          <br />
          Empowering students with knowledge, innovation, and excellence.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/admissions"
            className="group px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold flex items-center gap-2"
          >
            Apply Now
            <HiArrowRight className="group-hover:translate-x-1 transition" />
          </Link>

          <Link
            to="/courses"
            className="px-8 py-3.5 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
          >
            Explore Courses
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { label: 'Students', value: '2500+' },
            { label: 'Faculty', value: '120+' },
            { label: 'Departments', value: '10+' },
            { label: 'Placements', value: '90%' },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES / DEPARTMENTS */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28">
        <h2 className="text-2xl font-bold text-white mb-10 text-center">
          Our Departments
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl bg-surface-card/50 border border-white/10 hover:border-primary/40 transition-all hover:-translate-y-1"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white mb-4`}
              >
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EVENTS SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-6">
          Upcoming Events
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {['Tech Fest', 'Cultural Fest', 'Workshops', 'Hackathon'].map(e => (
            <span
              key={e}
              className="px-5 py-2 rounded-full bg-primary/20 text-primary-light text-sm"
            >
              {e}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;