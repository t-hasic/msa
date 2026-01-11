import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

/**
 * Main layout component that wraps all pages
 * Provides consistent header and footer across the site
 */
export default function Layout() {
  return (
    <div className="page">
      <Header />
      <main className="page__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
