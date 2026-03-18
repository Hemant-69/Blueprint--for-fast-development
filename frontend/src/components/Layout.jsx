import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
    >
      <Navbar />
      <main className="flex-1" style={{ paddingTop: '6.5rem' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
