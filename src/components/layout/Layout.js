import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../ScrollToTop';

function Layout() {
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';
  
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header isAboutPage={isAboutPage} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer isAboutPage={isAboutPage} />
    </div>
  );
}

export default Layout;
