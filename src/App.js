import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import './App.scss';


// Import các trang
import Reports from './pages/Reports/Reports';
// import OpenReport from './pages/OpenReport';
// import ReportInfo from './pages/ReportInfo';
// import Compare from './pages/Compare';
import OtherPage from './pages/Others/OthersPage';

const App = () => {
  return (
    <Router>
      <div className="app__root">
        <div className="side__bar" >
          <Sidebar />
        </div>
        <div className="app__content">
          <Routes>
            <Route path="/reports" element={<Reports />} />
            {/* <Route path="/open-report" element={<OpenReport />} />
            <Route path="/report-info" element={<ReportInfo />} />
            <Route path="/compare" element={<Compare />} /> */}
            <Route path="/others-page" element={<OtherPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
