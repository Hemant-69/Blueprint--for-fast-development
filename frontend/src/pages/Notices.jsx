import { useState } from 'react';
import { HiSearch, HiBell, HiCalendar, HiDownload, HiFilter } from 'react-icons/hi';

const allNotices = [
  { id: 1, title: 'Admissions Open for 2026–27 Batch', date: '2026-03-15', category: 'Admissions', priority: 'high', body: 'Applications are now open for the 2026–27 academic batch. Students can apply online through the official portal. Last date to apply: 30 April 2026. Application fee: ₹500.' },
  { id: 2, title: 'Scholarship Exam Results Published', date: '2026-03-12', category: 'Academic', priority: 'normal', body: 'Results of the State Scholarship Examination have been published. Students can check their results on the official scholarship portal. Selected students will receive further instructions.' },
  { id: 3, title: 'Annual Sports Week – March 25 to 29', date: '2026-03-10', category: 'Events', priority: 'normal', body: 'Annual Sports Week will be held from 25–29 March 2026. All students are encouraged to participate. Registration forms available at the Sports Office. Events include cricket, football, kabaddi, and athletics.' },
  { id: 4, title: 'Interview Preparation Workshop – March 20', date: '2026-03-08', category: 'Placement', priority: 'high', body: 'A special Interview Preparation Workshop will be held on 20 March 2026 for all final year students. Resource persons from leading companies will conduct mock interviews and provide feedback.' },
  { id: 5, title: 'Library Timing Change – Effective April 1', date: '2026-03-05', category: 'General', priority: 'normal', body: 'Library timings will be changed from 8:00 AM – 5:00 PM to 8:00 AM – 7:00 PM effective April 1, 2026. Students can avail extended reading hours.' },
  { id: 6, title: 'TechFest 2026 Registration Open', date: '2026-03-01', category: 'Events', priority: 'high', body: 'TechFest 2026 registration is now open. Events include robotics, coding contest, project display, and paper presentation. Register at the Student Affairs Office or online portal.' },
  { id: 7, title: 'Examination Schedule – End Semester', date: '2026-02-28', category: 'Examination', priority: 'urgent', body: 'End semester examination schedule has been published. Students are advised to check the schedule and prepare accordingly. No changes will be considered after 15 March 2026.' },
  { id: 8, title: 'Holiday Notice – Holi', date: '2026-02-25', category: 'General', priority: 'normal', body: 'The institute will remain closed on 13–14 March 2026 on account of Holi festival. Classes will resume on 15 March 2026 as per normal schedule.' },
];

const categories = ['All', 'Admissions', 'Academic', 'Events', 'Placement', 'Examination', 'General'];
const priorityColors = {
  urgent: { bg: 'rgba(239,68,68,0.12)', text: '#ef4444', label: 'URGENT' },
  high:   { bg: 'rgba(245,158,11,0.12)', text: '#f59e0b', label: 'IMPORTANT' },
  normal: { bg: 'rgba(100,116,139,0.12)', text: '#94a3b8', label: 'NOTICE' },
};

const Notices = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [expanded, setExpanded] = useState(null);

  const filtered = allNotices.filter(n => {
    const matchesCat = category === 'All' || n.category === category;
    const matchesSearch = n.title.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>

      {/* Hero */}
      <section style={{ padding: '4rem 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 0, rgba(220,38,38,0.1) 0%, transparent 70%)' }} />
        <div className="max-w-4xl mx-auto px-4" style={{ position: 'relative' }}>
          <div className="badge mx-auto mb-4">
            <HiBell style={{ marginRight: '0.25rem' }} /> Notice Board
          </div>
          <h1 className="section-title" style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)' }}>
            Notices & <span className="gradient-text">Announcements</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '1rem auto 0', lineHeight: '1.8' }}>
            Stay updated with the latest announcements, time tables, and events from SIET Nilokheri.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section style={{ padding: '1.5rem 0', background: 'var(--bg-secondary)', position: 'sticky', top: '6.5rem', zIndex: 10 }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
            {/* Search */}
            <div style={{ position: 'relative', flex: '1', minWidth: '200px' }}>
              <HiSearch style={{ position: 'absolute', left: '0.875rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                type="text"
                placeholder="Search notices..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="form-input"
                style={{ paddingLeft: '2.5rem' }}
              />
            </div>
            {/* Category pills */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  style={{
                    padding: '0.35rem 0.875rem', borderRadius: '9999px', fontSize: '0.78rem', fontWeight: '600',
                    border: `1px solid ${category === cat ? 'var(--accent)' : 'var(--border-color)'}`,
                    background: category === cat ? 'var(--accent-glow)' : 'transparent',
                    color: category === cat ? 'var(--accent-light)' : 'var(--text-muted)',
                    cursor: 'pointer', transition: 'all 0.2s',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notices List */}
      <section style={{ padding: '3rem 0 5rem' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📭</div>
              <p>No notices found.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map(notice => {
                const p = priorityColors[notice.priority];
                return (
                  <div
                    key={notice.id}
                    className="notice-card"
                    style={{ cursor: 'pointer' }}
                    onClick={() => setExpanded(expanded === notice.id ? null : notice.id)}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                          <span style={{ fontSize: '0.65rem', fontWeight: '700', color: p.text, background: p.bg, padding: '0.15rem 0.5rem', borderRadius: '0.25rem' }}>
                            {p.label}
                          </span>
                          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', background: 'var(--bg-secondary)', padding: '0.15rem 0.5rem', borderRadius: '0.25rem' }}>
                            {notice.category}
                          </span>
                        </div>
                        <h4 style={{ color: 'var(--text-primary)', fontWeight: '600', fontSize: '0.925rem' }}>{notice.title}</h4>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <HiCalendar /> {new Date(notice.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </span>
                      </div>
                    </div>

                    {expanded === notice.id && (
                      <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.8' }}>{notice.body}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Notices;
