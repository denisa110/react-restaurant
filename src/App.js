import React  from 'react';
import "./App.css"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Rezervari from "./pages/Rezervari";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/menu" element={<Menu/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/rezervari" element={<Rezervari/>}/>
        </Routes>
        <Footer /> 
      </Router>
    </div>
  );
}

export default App;
