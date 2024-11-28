import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';

import Reports from './pages/Reports/Reports';
import OtherPage from './pages/Others/OthersPage';
import Sidebar from './components/Sidebar/Sidebar';

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
        <div className="app__content">
          <Routes>
            <Route path="/reports" element={<Reports />} />
            <Route path="/others-page" element={<OtherPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
