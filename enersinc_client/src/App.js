import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home.jsx';
import NavBar from './components/Navbar.jsx';
//------------------------------------------------------------------------------------------------------

function App() {
  return (
    <div className="App">
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />      
    </Routes>
    </div>
  );
}

export default App;
