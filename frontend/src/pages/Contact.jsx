import { useState } from 'react';
import { HiPhone, HiMail, HiLocationMarker, HiClock, HiCheckCircle } from 'react-icons/hi';
import toast from 'react-hot-toast';

const contactInfo = [
  { icon: <HiLocationMarker size={20} />, title: 'Address', lines: ['SIET, Nilokheri', 'District Karnal, Haryana – 132117'] },
  { icon: <HiPhone size={20} />, title: 'Phone', lines: ['+91-1234567890', '+91-9876543210'] },
  { icon: <HiMail size={20} />, title: 'Email', lines: ['info@sietnilokheri.ac.in', 'principal@sietnilokheri.ac.in'] },
  { icon: <HiClock size={20} />, title: 'Office Hours', lines: ['Mon – Sat: 9:00 AM – 5:00 PM', 'Sunday: Closed'] },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
    toast.success('Message sent successfully!');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>

      {/* Hero */}
      <section style={{ padding: '4rem 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 0, rgba(220,38,38,0.1) 0%, transparent 70%)' }} />
        <div className="max-w-3xl mx-auto px-4" style={{ position: 'relative' }}>
          <div className="badge mx-auto mb-4">Get In Touch</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)' }}>
            Contact <span className="gradient-text">Us</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '1rem auto 0', lineHeight: '1.8' }}>
            Have a question about admissions, courses, or events? We're here to help. Reach out and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section style={{ padding: '2rem 0', background: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, i) => (
              <div key={i} className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <div style={{
                  width: '2.75rem', height: '2.75rem', borderRadius: '0.875rem',
                  background: 'var(--accent-glow)', color: 'var(--accent-light)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 0.875rem',
                }}>
                  {info.icon}
                </div>
                <h4 style={{ color: 'var(--text-primary)', fontWeight: '700', fontSize: '0.875rem', marginBottom: '0.5rem' }}>{info.title}</h4>
                {info.lines.map((line, j) => (
                  <p key={j} style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map + Form */}
      <section style={{ padding: '4rem 0 5rem' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">

            {/* Map Placeholder */}
            <div>
              <h2 style={{ color: 'var(--text-primary)', fontWeight: '700', fontSize: '1.375rem', marginBottom: '1.25rem' }}>
                📍 Find Us
              </h2>
              <div
                style={{
                  borderRadius: '1rem', overflow: 'hidden', height: '380px',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-card)',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  position: 'relative',
                }}
              >
                {/* Using Google Maps embed */}
                <iframe
                  title="SIET Nilokheri Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.0!2d76.9!3d29.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQ4JzAwLjAiTiA3NsKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="card" style={{ padding: '1.25rem', marginTop: '1rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <HiLocationMarker style={{ color: 'var(--accent-light)', fontSize: '1.1rem', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <p style={{ color: 'var(--text-primary)', fontWeight: '600', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
                    State Institute of Engineering & Technology
                  </p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>
                    Nilokheri, Karnal, Haryana – 132117, India
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 style={{ color: 'var(--text-primary)', fontWeight: '700', fontSize: '1.375rem', marginBottom: '1.25rem' }}>
                ✉️ Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="card" style={{ padding: '2rem' }}>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="form-label">Full Name</label>
                    <input
                      name="name" type="text" value={form.name}
                      onChange={handleChange} required placeholder="Your name"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label">Email Address</label>
                    <input
                      name="email" type="email" value={form.email}
                      onChange={handleChange} required placeholder="you@example.com"
                      className="form-input"
                    />
                  </div>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <label className="form-label">Subject</label>
                  <input
                    name="subject" type="text" value={form.subject}
                    onChange={handleChange} required placeholder="e.g. Admission Inquiry"
                    className="form-input"
                  />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label className="form-label">Message</label>
                  <textarea
                    name="message" value={form.message}
                    onChange={handleChange} required placeholder="Write your message here..."
                    rows={5} className="form-input" style={{ resize: 'vertical' }}
                  />
                </div>
                <button type="submit" className="btn-primary" disabled={loading} style={{ width: '100%', justifyContent: 'center' }}>
                  {loading ? (
                    <><span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin inline-block mr-2" />Sending...</>
                  ) : sent ? (
                    <><HiCheckCircle /> Message Sent!</>
                  ) : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
