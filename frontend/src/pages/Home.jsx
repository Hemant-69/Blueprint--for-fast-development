import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  HiArrowRight, HiAcademicCap, HiLightningBolt, HiShieldCheck, HiCog,
  HiChevronRight, HiStar, HiTrendingUp, HiUsers, HiBriefcase,
} from 'react-icons/hi';

const stats = [
  { value: '2,500+', label: 'Students Enrolled', icon: <HiUsers /> },
  { value: '120+', label: 'Expert Faculty', icon: <HiAcademicCap /> },
  { value: '10+', label: 'Departments', icon: <HiStar /> },
  { value: '90%', label: 'Placement Rate', icon: <HiBriefcase /> },
];

const departments = [
  {
    icon: <HiAcademicCap size={28} />,
    name: 'Computer Science & Engineering',
    short: 'CSE',
    desc: 'Modern curriculum covering AI, Machine Learning, Web Development, and Software Engineering.',
    students: '650+',
    color: '#dc2626',
  },
  {
    icon: <HiLightningBolt size={28} />,
    name: 'Electronics & Communication',
    short: 'ECE',
    desc: 'Deep dive into embedded systems, VLSI design, signal processing, and wireless communication.',
    students: '580+',
    color: '#e05b11',
  },
  {
    icon: <HiShieldCheck size={28} />,
    name: 'Electrical Engineering',
    short: 'EE',
    desc: 'Power systems, automation, control systems and electric drive technologies.',
    students: '420+',
    color: '#c2196f',
  },
  {
    icon: <HiCog size={28} />,
    name: 'Mechanical Engineering',
    short: 'ME',
    desc: 'Hands-on workshops, CAD/CAM, thermodynamics, and manufacturing processes.',
    students: '490+',
    color: '#7c3aed',
  },
];

const events = [
  { name: 'TechFest 2026', date: 'April 15–17', tag: 'Technology' },
  { name: 'Cultural Fest', date: 'March 22–23', tag: 'Culture' },
  { name: 'Hackathon 4.0', date: 'May 5', tag: 'Coding' },
  { name: 'Placement Drive', date: 'June 10–12', tag: 'Career' },
];

const notices = [
  'Admissions Open for 2026–27 Batch — Apply by 30 April',
  'Scholarship Exam Results Published — Check Portal',
  'Annual Sports Week starts from March 25',
  'Interview Workshop for Final Year Students — March 20',
];

// Animated counter
const Counter = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const num = parseInt(target.replace(/\D/g, ''));
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(num / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= num) { setCount(num); clearInterval(timer); }
      else setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [num]);
  return <>{count}{target.replace(/[0-9]/g, '')}</>;
};

const Home = () => {
  return (
    <div style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: 'calc(100vh - 6.5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
      >
        {/* Background glow */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(220,38,38,0.12) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        {/* Side glow */}
        <div style={{
          position: 'absolute', right: '-10%', top: '20%',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'rgba(220,38,38,0.05)', filter: 'blur(60px)',
          pointerEvents: 'none',
        }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div className="animate-fade-in-up">
              <div className="badge mb-6">
                🎓 Established 1954 • AICTE Approved
              </div>

              <h1 style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: '900',
                lineHeight: '1.1',
                color: 'var(--text-primary)',
                marginBottom: '1.25rem',
              }}>
                State Institute of<br />
                <span className="gradient-text">Engineering & Technology</span>
              </h1>

              <p style={{
                fontSize: '1.1rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                marginBottom: '0.75rem',
              }}>
                राज्य अभियांत्रिकी एवं प्रौद्योगिकी संस्थान, निलोखेड़ी (करनाल)
              </p>
              <p style={{
                fontSize: '0.95rem',
                color: 'var(--text-muted)',
                lineHeight: '1.7',
                marginBottom: '2rem',
              }}>
                Empowering minds with knowledge, innovation & excellence. Shaping engineers who lead tomorrow's world.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <Link to="/admissions" className="btn-primary" style={{ textDecoration: 'none' }}>
                  Apply Now <HiArrowRight />
                </Link>
                <Link to="/departments" className="btn-outline" style={{ textDecoration: 'none' }}>
                  Explore Departments <HiChevronRight />
                </Link>
              </div>

              {/* Live notice ticker */}
              <div
                className="mt-8"
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  padding: '0.6rem 1rem',
                  background: 'rgba(220,38,38,0.08)',
                  border: '1px solid rgba(220,38,38,0.2)',
                  borderRadius: '0.75rem',
                }}
              >
                <span
                  style={{
                    background: 'var(--accent)', color: 'white',
                    fontSize: '0.65rem', fontWeight: '700',
                    padding: '0.2rem 0.5rem', borderRadius: '0.25rem',
                    letterSpacing: '0.05em',
                  }}
                >
                  LIVE
                </span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                  📢 Admissions Open 2026–27 — Last Date: 30 April 2026
                </span>
              </div>
            </div>

            {/* Right — Stats Grid */}
            <div className="grid grid-cols-2 gap-4 animate-fade-in-up delay-200">
              {stats.map((s, i) => (
                <div key={i} className="stat-block">
                  <div
                    style={{
                      width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem',
                      background: 'var(--accent-glow)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--accent-light)', fontSize: '1.2rem',
                      margin: '0 auto 0.75rem',
                    }}
                  >
                    {s.icon}
                  </div>
                  <div className="stat-number">
                    <Counter target={s.value} />
                  </div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── DEPARTMENTS ───────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="badge mx-auto mb-4">Our Programs</div>
            <h2 className="section-title">Academic Departments</h2>
            <p className="section-subtitle">Industry-aligned curriculum with state-of-the-art labs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, i) => (
              <Link
                key={i}
                to="/departments"
                className="dept-card"
                style={{ textDecoration: 'none', color: 'inherit', animationDelay: `${i * 0.1}s` }}
              >
                <div
                  style={{
                    width: '3rem', height: '3rem', borderRadius: '0.875rem',
                    background: `${dept.color}22`,
                    color: dept.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  {dept.icon}
                </div>
                <span
                  style={{
                    display: 'inline-block', fontSize: '0.65rem', fontWeight: '700',
                    color: dept.color, background: `${dept.color}18`,
                    padding: '0.15rem 0.5rem', borderRadius: '0.25rem',
                    letterSpacing: '0.08em', marginBottom: '0.5rem',
                  }}
                >
                  {dept.short}
                </span>
                <h3 style={{ color: 'var(--text-primary)', fontWeight: '700', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                  {dept.name}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: '1.6', marginBottom: '0.75rem' }}>
                  {dept.desc}
                </p>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                  👤 {dept.students} students
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NOTICES + EVENTS ──────────────────────────────── */}
      <section style={{ padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">

            {/* Notices */}
            <div>
              <div className="badge mb-4">Latest Updates</div>
              <h2 className="section-title">Notices & Announcements</h2>
              <div className="space-y-3">
                {notices.map((notice, i) => (
                  <div key={i} className="notice-card" style={{ animationDelay: `${i * 0.1}s` }}>
                    <p style={{ color: 'var(--text-primary)', fontSize: '0.875rem', lineHeight: '1.6' }}>
                      {notice}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                to="/notices"
                className="btn-outline mt-5 inline-flex"
                style={{ textDecoration: 'none', marginTop: '1.25rem' }}
              >
                View All Notices <HiArrowRight />
              </Link>
            </div>

            {/* Events */}
            <div>
              <div className="badge mb-4">What's Happening</div>
              <h2 className="section-title">Upcoming Events</h2>
              <div className="space-y-3">
                {events.map((ev, i) => (
                  <div
                    key={i}
                    className="card"
                    style={{
                      padding: '1rem 1.25rem',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <h4 style={{ color: 'var(--text-primary)', fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.2rem' }}>
                        {ev.name}
                      </h4>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>📅 {ev.date}</span>
                    </div>
                    <span
                      style={{
                        fontSize: '0.7rem', fontWeight: '600',
                        color: 'var(--accent-light)',
                        background: 'var(--accent-glow)',
                        padding: '0.25rem 0.6rem', borderRadius: '9999px',
                      }}
                    >
                      {ev.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY SIET ──────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="badge mx-auto mb-4">Why Choose Us</div>
            <h2 className="section-title">Excellence in Every Aspect</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🏆', title: 'Award-Winning Faculty', desc: 'Experienced educators with industry and research backgrounds committed to student success.' },
              { icon: '🔬', title: 'State-of-the-Art Labs', desc: 'Modern laboratories equipped with the latest tools and technologies for hands-on learning.' },
              { icon: '🤝', title: 'Strong Industry Connect', desc: 'Active partnerships with 100+ companies for internships, projects and campus placements.' },
            ].map((item, i) => (
              <div key={i} className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ color: 'var(--text-primary)', fontWeight: '700', marginBottom: '0.5rem', fontSize: '1rem' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.7' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ────────────────────────────────────── */}
      <section style={{ padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            style={{
              background: 'linear-gradient(135deg, var(--accent-dark) 0%, var(--accent) 60%, #ff6b6b 100%)',
              borderRadius: '1.5rem',
              padding: '3rem 2rem',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{
              position: 'absolute', top: '-30px', right: '-30px',
              width: '200px', height: '200px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.05)',
            }} />
            <div style={{
              position: 'absolute', bottom: '-40px', left: '-40px',
              width: '250px', height: '250px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.04)',
            }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ color: 'white', fontSize: '2rem', fontWeight: '800', marginBottom: '0.75rem' }}>
                Ready to Begin Your Journey?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
                Join thousands of students who chose SIET Nilokheri for an extraordinary engineering education.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                <Link
                  to="/admissions"
                  style={{
                    background: 'white', color: 'var(--accent-dark)',
                    padding: '0.875rem 2rem', borderRadius: '0.75rem',
                    fontWeight: '700', textDecoration: 'none', fontSize: '0.9rem',
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    transition: 'all 0.2s',
                  }}
                >
                  Apply Now <HiArrowRight />
                </Link>
                <Link
                  to="/contact"
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    color: 'white',
                    padding: '0.875rem 2rem', borderRadius: '0.75rem',
                    fontWeight: '600', textDecoration: 'none', fontSize: '0.9rem',
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;