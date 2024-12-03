import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';

import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/HeaderComponent';

const App = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const toggleSidebar = () => {
    console.log((prevState) => prevState);

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
      <div className={`app__root ${isSidebarCollapsed ? 'collapsed' : 'expanded'}`}>
        <div className='sidebar-div'>
          <Sidebar toggleSidebar={toggleSidebar} isSidebarCollapsed={isSidebarCollapsed} />
        </div>
        <div className={`header-div ${isHeaderHidden ? 'hiden' : ''}`}>
          <div className='space-of-sidebar'></div>
          <div className='header'>
            <Header />
          </div>
        </div>
        <div className='content-div'>
          <div className='space-of-sidebar'></div>
          <div className='content-right'>
            <div className='space-of-header'></div>
            <div className='content'>
            </div>
          </div>
          {/* <button className='button' onClick={toggleSidebar}>
            Toggle
          </button> */}
        </div>
      </div>
    </Router >
  );
};

export default App;
