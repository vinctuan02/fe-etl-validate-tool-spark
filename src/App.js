import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';

import Reports from './pages/Reports/Reports';
import OtherPage from './pages/Others/OthersPage';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/HeaderComponent';

const App = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(prevState => !prevState);
  };

  return (
    <Router>
      <div className="app__root">
        <div className={`sidebar-div ${isSidebarCollapsed ? 'collapsed' : 'expanded'}`}>
          <Sidebar toggleSidebar={toggleSidebar} isSidebarCollapsed={isSidebarCollapsed} />
        </div>
        <div className={`app__main ${isSidebarCollapsed ? 'collapsed' : 'expanded'}`}>
          <div className='header'>
            <Header />
          </div>
          <div className="app__content">
            <Routes>
              <Route path="/reports" element={<Reports />} />
              <Route path="/page2" element={<page2 />} />
              <Route path="/page3" element={<page3 />} />
              <Route path="/page4" element={<page4 />} />
              <Route path="/others-page" element={<OtherPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
