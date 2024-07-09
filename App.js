import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Adventura from './Components/Adventura/Adventura';
import Transport from './Components/Transport/Transport';
import DynamicSafetyDashboard from './Components/DynamicSafetyDashboard/DynamicSafetyDashboard';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Home /><Main /><Footer /></>} />
        <Route path="/adventure" element={<Adventura />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/safety-legal" element={<DynamicSafetyDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
