import { useState } from 'react';
import toast from 'react-hot-toast';
import { HiStar, HiCheckCircle, HiChatAlt2, HiUser, HiMail, HiAcademicCap } from 'react-icons/hi';

const StarRating = ({ value, onChange }) => (
  <div style={{ display: 'flex', gap: '0.25rem' }}>
    {[1, 2, 3, 4, 5].map(n => (
      <button
        key={n}
        type="button"
        onClick={() => onChange(n)}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: n <= value ? '#f59e0b' : 'var(--border-color)',
          fontSize: '1.5rem', padding: 0, transition: 'color 0.15s',
        }}
      >
        ★
      </button>
    ))}
  </div>
);

const Feedback = () => {
  const [form, setForm] = useState({
    name: '', email: '', department: '', year: '',
    course: 3, faculty: 3, infrastructure: 3, library: 3, placement: 3,
    suggestions: '', overall: 0,
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handle = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  const setRating = (field, val) => setForm(p => ({ ...p, [field]: val }));

  const handleSubmit = async e => {
    e.preventDefault();
    if (form.overall === 0) { toast.error('Please give an overall rating!'); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
    toast.success('Thank you for your feedback!');
  };

  if (submitted) {
    return (
      <div style={{ background: 'var(--bg-primary)', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '400px' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
          <h2 style={{ color: 'var(--text-primary)', fontWeight: '800', fontSize: '1.75rem', marginBottom: '0.75rem' }}>Feedback Received!</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>
            Thank you for taking the time to share your feedback. Your response has been recorded and will help us improve SIET Nilokheri.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: '', email: '', department: '', year: '', course: 3, faculty: 3, infrastructure: 3, library: 3, placement: 3, suggestions: '', overall: 0 }); }}
            className="btn-primary"
          >
            Submit Another Response
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>

      {/* Hero */}
      <section style={{ padding: '4rem 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 0, rgba(220,38,38,0.1) 0%, transparent 70%)' }} />
        <div className="max-w-2xl mx-auto px-4" style={{ position: 'relative' }}>
          <div className="badge mx-auto mb-4"><HiChatAlt2 style={{ marginRight: '0.25rem' }} /> Student Feedback</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)' }}>
            Share Your <span className="gradient-text">Experience</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '480px', margin: '1rem auto 0', lineHeight: '1.8' }}>
            Your honest feedback helps us improve academic quality, infrastructure, and student services at SIET Nilokheri.
          </p>
        </div>
      </section>

      {/* Form */}
      <section style={{ padding: '2rem 0 5rem' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit}>

            {/* Personal Info */}
            <div className="card" style={{ padding: '2rem', marginBottom: '1.25rem' }}>
              <h3 style={{ color: 'var(--text-primary)', fontWeight: '700', fontSize: '1rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <HiUser style={{ color: 'var(--accent-light)' }} /> Personal Information
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Full Name *</label>
                  <input name="name" type="text" required value={form.name} onChange={handle} placeholder="Your full name" className="form-input" />
                </div>
                <div>
                  <label className="form-label">Email Address</label>
                  <input name="email" type="email" value={form.email} onChange={handle} placeholder="your@email.com" className="form-input" />
                </div>
                <div>
                  <label className="form-label">Department *</label>
                  <select name="department" required value={form.department} onChange={handle} className="form-input">
                    <option value="">Select Department</option>
                    {['CSE', 'ECE', 'EE', 'ME', 'Applied Science'].map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
                <div>
                  <label className="form-label">Year of Study *</label>
                  <select name="year" required value={form.year} onChange={handle} className="form-input">
                    <option value="">Select Year</option>
                    {['1st Year', '2nd Year', '3rd Year', 'Alumni'].map(y => <option key={y} value={y}>{y}</option>)}
                  </select>
                </div>
              </div>
            </div>

            {/* Ratings */}
            <div className="card" style={{ padding: '2rem', marginBottom: '1.25rem' }}>
              <h3 style={{ color: 'var(--text-primary)', fontWeight: '700', fontSize: '1rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <HiStar style={{ color: 'var(--accent-light)' }} /> Rate Your Experience
              </h3>
              <div className="space-y-5">
                {[
                  { key: 'course', label: '📚 Course Curriculum' },
                  { key: 'faculty', label: '👩‍🏫 Faculty & Teaching Quality' },
                  { key: 'infrastructure', label: '🏗️ Campus & Infrastructure' },
                  { key: 'library', label: '📖 Library Resources' },
                  { key: 'placement', label: '💼 Placement Support' },
                ].map(({ key, label }) => (
                  <div key={key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)' }}>
                    <span style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: '500' }}>{label}</span>
                    <StarRating value={form[key]} onChange={val => setRating(key, val)} />
                  </div>
                ))}
              </div>
            </div>

            {/* Overall & Suggestions */}
            <div className="card" style={{ padding: '2rem', marginBottom: '1.25rem' }}>
              <h3 style={{ color: 'var(--text-primary)', fontWeight: '700', fontSize: '1rem', marginBottom: '1rem' }}>
                🌟 Overall Rating *
              </h3>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                {[1, 2, 3, 4, 5].map(n => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setRating('overall', n)}
                    style={{
                      padding: '0.6rem 1.25rem', borderRadius: '0.75rem', fontWeight: '700',
                      fontSize: '0.875rem', cursor: 'pointer', transition: 'all 0.2s',
                      background: form.overall === n ? 'var(--accent)' : 'var(--bg-secondary)',
                      color: form.overall === n ? 'white' : 'var(--text-muted)',
                      border: `1px solid ${form.overall === n ? 'var(--accent)' : 'var(--border-color)'}`,
                    }}
                  >
                    {['😞', '😐', '🙂', '😊', '😍'][n - 1]} {['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'][n - 1]}
                  </button>
                ))}
              </div>
              <div>
                <label className="form-label">Additional Suggestions or Comments</label>
                <textarea
                  name="suggestions" value={form.suggestions} onChange={handle}
                  placeholder="Share any specific feedback, suggestions or improvements you'd like to see..."
                  rows={4} className="form-input" style={{ resize: 'vertical' }}
                />
              </div>
            </div>

            <button type="submit" className="btn-primary" disabled={loading} style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}>
              {loading
                ? <><span style={{ width: '1rem', height: '1rem', border: '2px solid white', borderTopColor: 'transparent', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.7s linear infinite' }} /> Submitting...</>
                : <><HiCheckCircle /> Submit Feedback</>
              }
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Feedback;
