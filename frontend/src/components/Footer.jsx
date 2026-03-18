import { Link } from 'react-router-dom';
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <img src="logo.png" alt="SIET Logo" className="w-9 h-9 rounded-lg" />
              <span style={{ color: 'var(--text-primary)', fontWeight: '700', fontSize: '0.9rem' }}>
                SIET Nilokheri
              </span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', lineHeight: '1.6' }}>
              State Institute of Engineering & Technology, Nilokheri. Empowering students since decades.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'var(--text-primary)', fontWeight: '600', marginBottom: '0.75rem', fontSize: '0.85rem' }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[['/', 'Home'], ['/about', 'About Us'], ['/departments', 'Departments'], ['/admissions', 'Admissions']].map(([path, label]) => (
                <li key={path}>
                  <Link
                    to={path}
                    style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textDecoration: 'none' }}
                    className="hover:text-red-400 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 style={{ color: 'var(--text-primary)', fontWeight: '600', marginBottom: '0.75rem', fontSize: '0.85rem' }}>
              More
            </h4>
            <ul className="space-y-2">
              {[['/notices', 'Notices'], ['/album', 'Gallery'], ['/contact', 'Contact'], ['/feedback', 'Feedback']].map(([path, label]) => (
                <li key={path}>
                  <Link
                    to={path}
                    style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textDecoration: 'none' }}
                    className="hover:text-red-400 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: 'var(--text-primary)', fontWeight: '600', marginBottom: '0.75rem', fontSize: '0.85rem' }}>
              Contact
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2" style={{ color: 'var(--text-secondary)', fontSize: '0.78rem' }}>
                <HiLocationMarker className="mt-0.5 flex-shrink-0" style={{ color: 'var(--accent-light)' }} />
                SIET, Nilokheri, Karnal, Haryana – 132117
              </li>
              <li className="flex items-center gap-2" style={{ color: 'var(--text-secondary)', fontSize: '0.78rem' }}>
                <HiPhone style={{ color: 'var(--accent-light)' }} /> +91-1234567890
              </li>
              <li className="flex items-center gap-2" style={{ color: 'var(--text-secondary)', fontSize: '0.78rem' }}>
                <HiMail style={{ color: 'var(--accent-light)' }} /> info@sietnilokheri.ac.in
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{ borderTop: '1px solid var(--border-color)', marginTop: '2rem', paddingTop: '1.5rem' }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>
            © {new Date().getFullYear()} SIET Nilokheri. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            {[['#', 'Privacy'], ['#', 'Terms'], ['/contact', 'Contact']].map(([href, label]) => (
              <a
                key={label}
                href={href}
                style={{ color: 'var(--text-muted)', fontSize: '0.78rem', textDecoration: 'none' }}
                className="hover:text-red-400 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
