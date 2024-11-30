import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';

import Reports from './pages/Reports/Reports';
import OtherPage from './pages/Others/OthersPage';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/HeaderComponent';

const App = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      // Check if scrolling down or up
      if (currentScrollTop > lastScrollTop && currentScrollTop > 50) {
        setIsHeaderHidden(true); // Scrolling down, hide header
      } else {
        setIsHeaderHidden(false); // Scrolling up, show header
      }

      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <Router>
      <div className="app__root">
        <div className={`sidebar-div ${isSidebarCollapsed ? 'collapsed' : 'expanded'}`}>
          <Sidebar toggleSidebar={toggleSidebar} isSidebarCollapsed={isSidebarCollapsed} />
        </div>
        <div className={`app__main ${isSidebarCollapsed ? 'collapsed' : 'expanded'}`}>
          <div className={`header ${isHeaderHidden ? 'header-hidden' : ''}`}>
            <Header />
          </div>
          <div className="app__content">
            <Routes>
              <Route path="/reports" element={<Reports />} />
              <Route path="/page2" element={<OtherPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
