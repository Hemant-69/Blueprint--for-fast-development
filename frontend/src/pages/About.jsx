import { HiAcademicCap, HiStar, HiLightBulb, HiHeart, HiUsers, HiOfficeBuilding } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const leadership = [
  { name: 'Dr. Rajesh Kumar', role: 'Principal', img: '👨‍💼' },
  { name: 'Dr. Anita Sharma', role: 'Dean of Academics', img: '👩‍💼' },
  { name: 'Dr. Suresh Mehta', role: 'Dean of Research', img: '👨‍🔬' },
  { name: 'Prof. Nidhi Singh', role: 'Registrar', img: '👩‍💻' },
];

const About = () => {
  return (
    <div style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>

      {/* Hero */}
      <section
        style={{
          padding: '4rem 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 50% 0, rgba(220,38,38,0.1) 0%, transparent 70%)',
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ position: 'relative' }}>
          <div className="badge mx-auto mb-4">About SIET Nilokheri</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)' }}>
            A Legacy of <span className="gradient-text">Engineering Excellence</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '680px', margin: '1rem auto 0', lineHeight: '1.8', fontSize: '1rem' }}>
            State Institute of Engineering & Technology, Nilokheri (SIET) has been nurturing engineering talent since 1954,
            producing thousands of professionals who contribute to India's growth story.
          </p>
        </div>
      </section>

      {/* History */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge mb-4">Our Story</div>
              <h2 className="section-title">Decades of Academic Excellence</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1rem' }}>
                Founded in 1954 as a polytechnic institute, SIET Nilokheri has evolved into a premier engineering institution
                under Haryana State Technical Education. Located in the historically significant town of Nilokheri, the
                institute has been a cornerstone of technical education in the region.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Recognized by AICTE and affiliated with the State Board of Technical Education, Haryana, SIET offers diploma
                programs in various engineering disciplines that blend theoretical knowledge with practical skills.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { val: '1954', label: 'Year Founded' },
                  { val: '70+', label: 'Years of Excellence' },
                  { val: '25K+', label: 'Alumni Worldwide' },
                ].map((s, i) => (
                  <div key={i} style={{ textAlign: 'center', padding: '1rem', background: 'var(--bg-card)', borderRadius: '0.75rem', border: '1px solid var(--border-color)' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--accent-light)' }}>{s.val}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <HiAcademicCap size={24} />, title: 'AICTE Approved', desc: 'All programs approved by All India Council for Technical Education.' },
                { icon: <HiStar size={24} />, title: 'Top Ranked', desc: 'Consistently ranked among best diploma institutes in Haryana.' },
                { icon: <HiOfficeBuilding size={24} />, title: 'Modern Campus', desc: '50-acre green campus with state-of-the-art infrastructure.' },
                { icon: <HiUsers size={24} />, title: 'Alumni Network', desc: '25,000+ alumni in top companies and government roles globally.' },
              ].map((item, i) => (
                <div key={i} className="card" style={{ padding: '1.5rem' }}>
                  <div style={{ color: 'var(--accent-light)', marginBottom: '0.75rem' }}>{item.icon}</div>
                  <h4 style={{ color: 'var(--text-primary)', fontWeight: '600', fontSize: '0.875rem', marginBottom: '0.4rem' }}>{item.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.78rem', lineHeight: '1.6' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section style={{ padding: '4rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="badge mx-auto mb-3">Our Direction</div>
            <h2 className="section-title">Vision & Mission</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card" style={{ padding: '2.5rem' }}>
              <div style={{ color: 'var(--accent-light)', fontSize: '2rem', marginBottom: '1rem' }}>🔭</div>
              <h3 style={{ color: 'var(--text-primary)', fontWeight: '700', fontSize: '1.25rem', marginBottom: '1rem' }}>Vision</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                To be a nationally recognized institute of technical education that produces highly competent, innovative
                and ethical engineers who contribute meaningfully to society and nation-building.
              </p>
            </div>
            <div className="card" style={{ padding: '2.5rem' }}>
              <div style={{ color: 'var(--accent-light)', fontSize: '2rem', marginBottom: '1rem' }}>🎯</div>
              <h3 style={{ color: 'var(--text-primary)', fontWeight: '700', fontSize: '1.25rem', marginBottom: '1rem' }}>Mission</h3>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.9', listStyle: 'none', padding: 0 }}>
                {[
                  'Provide quality technical education with practical exposure',
                  'Foster research, innovation, and entrepreneurial mindset',
                  'Build strong industry-academia partnerships',
                  'Promote holistic development of students',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--accent-light)', marginTop: '0.2rem' }}>✦</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="badge mx-auto mb-3">Leadership</div>
            <h2 className="section-title">Our Leadership Team</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader, i) => (
              <div key={i} className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{leader.img}</div>
                <h4 style={{ color: 'var(--text-primary)', fontWeight: '700', fontSize: '0.9rem', marginBottom: '0.25rem' }}>{leader.name}</h4>
                <span style={{
                  fontSize: '0.75rem', color: 'var(--accent-light)',
                  background: 'var(--accent-glow)',
                  padding: '0.2rem 0.6rem', borderRadius: '9999px', display: 'inline-block',
                }}>
                  {leader.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '4rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="badge mx-auto mb-3">What We Stand For</div>
            <h2 className="section-title">Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: <HiLightBulb size={22} />, title: 'Innovation', desc: 'Encouraging creative thinking and novel solutions to real-world problems.' },
              { icon: <HiStar size={22} />, title: 'Excellence', desc: 'Pursuing the highest standards in academics and extracurriculars.' },
              { icon: <HiHeart size={22} />, title: 'Integrity', desc: 'Upholding ethical values, transparency and academic honesty.' },
              { icon: <HiUsers size={22} />, title: 'Collaboration', desc: 'Fostering teamwork between students, faculty and industry partners.' },
              { icon: <HiAcademicCap size={22} />, title: 'Learning', desc: 'Lifelong learning culture that goes beyond textbooks and classrooms.' },
              { icon: <HiOfficeBuilding size={22} />, title: 'Service', desc: 'Commitment to the community and society at large through our work.' },
            ].map((val, i) => (
              <div key={i} className="card" style={{ padding: '1.75rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem', flexShrink: 0,
                  background: 'var(--accent-glow)', color: 'var(--accent-light)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {val.icon}
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-primary)', fontWeight: '700', fontSize: '0.9rem', marginBottom: '0.4rem' }}>{val.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: '1.6' }}>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
