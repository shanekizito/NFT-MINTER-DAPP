import React from 'react';
import NavBar from './Components/NavBar';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 


function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' exact element={<Home/>} />
           
        </Routes>
      </Router>
    </>
  );
}

export default App;