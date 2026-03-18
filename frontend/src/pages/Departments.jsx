import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiAcademicCap, HiLightningBolt, HiShieldCheck, HiCog, HiChevronDown } from 'react-icons/hi';

const departments = [
  {
    id: 'cse',
    short: 'CSE',
    name: 'Computer Science & Engineering',
    icon: <HiAcademicCap size={32} />,
    color: '#dc2626',
    intake: 60,
    years: 3,
    desc: 'The CSE department offers a comprehensive curriculum covering software development, data structures, algorithms, web technology, artificial intelligence, and database management. Students gain both theoretical knowledge and practical skills through well-equipped computer labs.',
    highlights: ['Programming & Algorithms', 'Web & App Development', 'AI & Machine Learning', 'Database Management', 'Networking & Security'],
    labs: ['Programming Lab', 'Web Technology Lab', 'Advanced Computing Lab'],
    placements: ['Infosys', 'TCS', 'Wipro', 'HCL', 'Cognizant'],
  },
  {
    id: 'ece',
    short: 'ECE',
    name: 'Electronics & Communication Engineering',
    icon: <HiLightningBolt size={32} />,
    color: '#e05b11',
    intake: 60,
    years: 3,
    desc: 'ECE department covers analog & digital electronics, embedded systems, microprocessors, VLSI design, communication systems, and signal processing. Students work on real-world projects in state-of-the-art electronics laboratories.',
    highlights: ['Analog & Digital Electronics', 'Embedded Systems', 'VLSI Design', 'Communication Systems', 'Signal Processing'],
    labs: ['Electronics Lab', 'Communication Lab', 'Microprocessor Lab'],
    placements: ['BSNL', 'Bharti Airtel', 'Samsung', 'Qualcomm', 'Intel'],
  },
  {
    id: 'ee',
    short: 'EE',
    name: 'Electrical Engineering',
    icon: <HiShieldCheck size={32} />,
    color: '#c2196f',
    intake: 60,
    years: 3,
    desc: 'The EE department focuses on power systems, electrical machines, control systems, and industrial automation. Students get hands-on experience in power lab, electrical machines lab, and PLC/SCADA systems.',
    highlights: ['Power Systems', 'Electrical Machines', 'Control Systems', 'Industrial Automation', 'PLC & SCADA'],
    labs: ['Power Systems Lab', 'Electrical Machines Lab', 'Control Systems Lab'],
    placements: ['PGVCL', 'HVPNL', 'Bharat Heavy Electricals', 'Siemens', 'ABB'],
  },
  {
    id: 'me',
    short: 'ME',
    name: 'Mechanical Engineering',
    icon: <HiCog size={32} />,
    color: '#7c3aed',
    intake: 60,
    years: 3,
    desc: 'Mechanical Engineering at SIET covers thermodynamics, fluid mechanics, machine design, manufacturing processes, and CAD/CAM. Students gain practical experience through workshop training and industry visits.',
    highlights: ['Thermodynamics & Fluid Mechanics', 'Machine Design', 'Manufacturing Processes', 'CAD/CAM', 'Robotics & Automation'],
    labs: ['Workshop', 'Thermodynamics Lab', 'Metrology Lab', 'CAD Lab'],
    placements: ['Maruti Suzuki', 'Hero MotoCorp', 'BHEL', 'L&T', 'Tata Motors'],
  },
  {
    id: 'as',
    short: 'AS',
    name: 'Applied Science & Humanities',
    icon: '🔬',
    color: '#059669',
    intake: null,
    years: null,
    desc: 'The Applied Science department provides the foundational knowledge in Physics, Chemistry, Mathematics, and English for all engineering branches. It plays a vital role in building strong scientific and communication skills.',
    highlights: ['Engineering Physics', 'Engineering Chemistry', 'Engineering Mathematics', 'English Communication', 'Environmental Science'],
    labs: ['Physics Lab', 'Chemistry Lab', 'Language Lab'],
    placements: [],
  },
];

const DepartmentCard = ({ dept, isOpen, onToggle }) => (
  <div className="card" style={{ overflow: 'hidden', transition: 'all 0.3s ease' }}>
    <button
      onClick={onToggle}
      style={{
        width: '100%', padding: '1.5rem', background: 'none', border: 'none',
        cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '1rem',
        textAlign: 'left',
      }}
    >
      <div style={{
        width: '3.5rem', height: '3.5rem', borderRadius: '1rem', flexShrink: 0,
        background: `${dept.color}18`, color: dept.color,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: typeof dept.icon === 'string' ? '1.75rem' : 'inherit',
      }}>
        {dept.icon}
      </div>
      <div style={{ flex: 1 }}>
        <span style={{
          fontSize: '0.65rem', fontWeight: '700', letterSpacing: '0.08em',
          color: dept.color, background: `${dept.color}18`,
          padding: '0.15rem 0.5rem', borderRadius: '0.25rem', display: 'inline-block', marginBottom: '0.25rem',
        }}>
          {dept.short}
        </span>
        <h3 style={{ color: 'var(--text-primary)', fontWeight: '700', fontSize: '1rem' }}>{dept.name}</h3>
        {dept.intake && (
          <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>
            Intake: {dept.intake} seats • {dept.years}-year Diploma
          </span>
        )}
      </div>
      <HiChevronDown
        style={{
          color: 'var(--text-muted)', transition: 'transform 0.3s',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
          flexShrink: 0,
        }}
      />
    </button>

    {isOpen && (
      <div style={{ padding: '0 1.5rem 1.5rem', borderTop: '1px solid var(--border-color)' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.8', marginTop: '1rem', marginBottom: '1.25rem' }}>
          {dept.desc}
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <h5 style={{ color: 'var(--text-primary)', fontWeight: '700', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
              📚 Key Subjects
            </h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {dept.highlights.map((h, i) => (
                <li key={i} style={{ color: 'var(--text-secondary)', fontSize: '0.78rem', padding: '0.2rem 0', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ color: dept.color, fontSize: '0.6rem' }}>●</span> {h}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 style={{ color: 'var(--text-primary)', fontWeight: '700', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
              🔬 Laboratories
            </h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {dept.labs.map((lab, i) => (
                <li key={i} style={{ color: 'var(--text-secondary)', fontSize: '0.78rem', padding: '0.2rem 0', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ color: dept.color, fontSize: '0.6rem' }}>●</span> {lab}
                </li>
              ))}
            </ul>
          </div>
          {dept.placements.length > 0 && (
            <div>
              <h5 style={{ color: 'var(--text-primary)', fontWeight: '700', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
                🏢 Top Recruiters
              </h5>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {dept.placements.map((p, i) => (
                  <li key={i} style={{ color: 'var(--text-secondary)', fontSize: '0.78rem', padding: '0.2rem 0', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{ color: dept.color, fontSize: '0.6rem' }}>●</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )}
  </div>
);

const Departments = () => {
  const [openId, setOpenId] = useState('cse');

  return (
    <div style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>

      {/* Hero */}
      <section style={{ padding: '4rem 0', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 50% 0, rgba(220,38,38,0.1) 0%, transparent 70%)',
        }} />
        <div className="max-w-5xl mx-auto px-4" style={{ position: 'relative' }}>
          <div className="badge mx-auto mb-4">Academic Programs</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)' }}>
            Our <span className="gradient-text">Departments</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '1rem auto 0', lineHeight: '1.8' }}>
            Choose from industry-aligned 3-year diploma programs. Each department features modern labs, experienced faculty, and strong placement support.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section style={{ padding: '1.5rem 0', background: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: '5', label: 'Departments' },
              { val: '240', label: 'Annual Intake' },
              { val: '90%', label: 'Placement Rate' },
              { val: '50+', label: 'Industry Partners' },
            ].map((s, i) => (
              <div key={i} className="stat-block">
                <div className="stat-number">{s.val}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Accordion */}
      <section style={{ padding: '4rem 0' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {departments.map(dept => (
            <DepartmentCard
              key={dept.id}
              dept={dept}
              isOpen={openId === dept.id}
              onToggle={() => setOpenId(openId === dept.id ? null : dept.id)}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '3rem 0 5rem', textAlign: 'center' }}>
        <div className="max-w-lg mx-auto px-4">
          <h3 style={{ color: 'var(--text-primary)', fontWeight: '700', fontSize: '1.375rem', marginBottom: '0.75rem' }}>
            Ready to Join?
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
            Applications are open for the 2026–27 academic year. Secure your seat today.
          </p>
          <Link to="/admissions" className="btn-primary" style={{ textDecoration: 'none' }}>
            Apply Now <HiArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Departments;
