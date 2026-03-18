import { Link } from 'react-router-dom';
import { HiArrowRight, HiCheckCircle, HiDownload, HiCalendar, HiCurrencyRupee } from 'react-icons/hi';

const steps = [
  { step: '01', title: 'Fill Online Form', desc: 'Complete the online application form available on our official portal with accurate personal and academic details.' },
  { step: '02', title: 'Upload Documents', desc: 'Upload required documents: 10th marksheet, ID proof, passport photo, and any relevant certificates.' },
  { step: '03', title: 'Pay Application Fee', desc: 'Pay the application fee of ₹500 online through Net Banking, UPI, or Debit/Credit card.' },
  { step: '04', title: 'Merit List & Counselling', desc: 'Merit list is published based on 10th Board marks. Attend counselling for seat allotment.' },
  { step: '05', title: 'Document Verification', desc: 'Bring original documents to the campus for verification and final admission confirmation.' },
  { step: '06', title: 'Fee Payment & Enrollment', desc: 'Pay tuition and other fees to complete enrollment and receive your student ID card.' },
];

const keyDates = [
  { event: 'Application Portal Opens', date: 'March 15, 2026', status: 'open' },
  { event: 'Last Date to Apply', date: 'April 30, 2026', status: 'upcoming' },
  { event: 'Merit List Publication', date: 'May 10, 2026', status: 'upcoming' },
  { event: 'First Counselling Round', date: 'May 15–18, 2026', status: 'upcoming' },
  { event: 'Second Counselling Round', date: 'May 22–25, 2026', status: 'upcoming' },
  { event: 'Classes Begin', date: 'July 1, 2026', status: 'upcoming' },
];

const feeStructure = [
  { dept: 'CSE / ECE / EE / ME', tuition: '15,000', development: '5,000', total: '20,000' },
  { dept: 'Applied Science', tuition: '—', development: '—', total: 'N/A' },
  { dept: 'Hostel (Optional)', tuition: '24,000', development: '6,000', total: '30,000/yr' },
];

const Admissions = () => {
  return (
    <div style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>

      {/* Hero */}
      <section style={{ padding: '4rem 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 0, rgba(220,38,38,0.1) 0%, transparent 70%)' }} />
        <div className="max-w-4xl mx-auto px-4" style={{ position: 'relative' }}>
          <div className="badge mx-auto mb-4">Admissions 2026–27</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)' }}>
            Start Your <span className="gradient-text">Engineering Journey</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '1rem auto 2rem', lineHeight: '1.8' }}>
            Applications are now open for the 2026–27 academic year. Join SIET Nilokheri and build a future in engineering.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#apply" className="btn-primary" style={{ textDecoration: 'none' }}>
              Apply Online <HiArrowRight />
            </a>
            <a href="#fees" className="btn-outline" style={{ textDecoration: 'none' }}>
              View Fee Structure
            </a>
          </div>
        </div>
      </section>

      {/* Key Dates */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)' }} id="dates">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="badge mx-auto mb-3">Timeline</div>
            <h2 className="section-title">Key Admission Dates</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {keyDates.map((item, i) => (
              <div
                key={i}
                className="card"
                style={{ padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <HiCalendar style={{ color: 'var(--accent-light)', flexShrink: 0 }} />
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500', fontSize: '0.9rem' }}>{item.event}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{item.date}</span>
                  {item.status === 'open' && (
                    <span style={{ fontSize: '0.7rem', fontWeight: '700', color: '#10b981', background: 'rgba(16,185,129,0.1)', padding: '0.15rem 0.5rem', borderRadius: '9999px' }}>
                      OPEN
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section style={{ padding: '4rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <div className="badge mb-4">Requirements</div>
              <h2 className="section-title">Eligibility Criteria</h2>
              <div className="space-y-4">
                {[
                  { title: 'Minimum Qualification', desc: 'Passed 10th Standard (Matriculation) from a recognized Board.' },
                  { title: 'Minimum Marks', desc: '50% aggregate in Science (Physics & Chemistry) and Mathematics. 45% for SC/ST candidates.' },
                  { title: 'Age Limit', desc: 'Minimum 14 years as of 1st July 2026. No upper age limit.' },
                  { title: 'Domicile', desc: 'Preference given to Haryana domicile candidates in state quota seats.' },
                ].map((item, i) => (
                  <div key={i} className="card" style={{ padding: '1.25rem', display: 'flex', gap: '1rem' }}>
                    <HiCheckCircle style={{ color: 'var(--accent-light)', flexShrink: 0, marginTop: '2px', fontSize: '1.1rem' }} />
                    <div>
                      <h4 style={{ color: 'var(--text-primary)', fontWeight: '600', fontSize: '0.875rem', marginBottom: '0.25rem' }}>{item.title}</h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: '1.6' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="badge mb-4">Documents Required</div>
              <h2 className="section-title">Required Documents</h2>
              <div className="card" style={{ padding: '1.5rem' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    '10th Marksheet (Original + 2 copies)',
                    '10th Certificate / Migration Certificate',
                    'Aadhar Card / Any Government ID',
                    'Character Certificate from School',
                    'Passport-size Photographs (6 copies)',
                    'Caste Certificate (if applicable)',
                    'Income Certificate (for scholarship)',
                    'Domicile Certificate (Haryana residents)',
                  ].map((doc, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', padding: '0.5rem 0', borderBottom: i < 7 ? '1px solid var(--border-color)' : 'none' }}>
                      <span style={{ color: 'var(--accent-light)', fontSize: '0.75rem', marginTop: '0.2rem' }}>📄</span>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)' }} id="apply">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="badge mx-auto mb-3">How to Apply</div>
            <h2 className="section-title">Admission Process</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="card" style={{ padding: '1.75rem' }}>
                <div style={{
                  fontSize: '1.75rem', fontWeight: '900', color: 'var(--accent-light)',
                  opacity: '0.3', lineHeight: '1', marginBottom: '0.75rem',
                }}>
                  {s.step}
                </div>
                <h4 style={{ color: 'var(--text-primary)', fontWeight: '700', fontSize: '0.95rem', marginBottom: '0.5rem' }}>{s.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: '1.7' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section style={{ padding: '4rem 0' }} id="fees">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="badge mx-auto mb-3">Financials</div>
            <h2 className="section-title">Fee Structure (per semester)</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>All amounts in INR (₹)</p>
          </div>
          <div className="card" style={{ overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--accent)', color: 'white' }}>
                  {['Department', 'Tuition Fee', 'Development Fee', 'Total / Semester'].map(h => (
                    <th key={h} style={{ padding: '1rem', textAlign: 'left', fontSize: '0.8rem', fontWeight: '600' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--border-color)', background: i % 2 === 0 ? 'transparent' : 'var(--bg-secondary)' }}>
                    <td style={{ padding: '1rem', color: 'var(--text-primary)', fontSize: '0.875rem', fontWeight: '500' }}>{row.dept}</td>
                    <td style={{ padding: '1rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{row.tuition !== '—' ? `₹${row.tuition}` : '—'}</td>
                    <td style={{ padding: '1rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{row.development !== '—' ? `₹${row.development}` : '—'}</td>
                    <td style={{ padding: '1rem', color: 'var(--accent-light)', fontSize: '0.875rem', fontWeight: '700' }}>
                      {row.total !== 'N/A' ? `₹${row.total}` : 'N/A'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', marginTop: '1rem', textAlign: 'center' }}>
            * Scholarship available for meritorious and economically weaker students. SC/ST students may be eligible for full fee waiver.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Admissions;
