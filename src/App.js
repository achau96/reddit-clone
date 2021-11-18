import React from 'react';
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
