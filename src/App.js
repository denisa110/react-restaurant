import React from 'react';
import "./App.css"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Acasa from "./pages/Acasa";
import Meniu from "./pages/Meniu";
import DespreNoi from "./pages/Despre-noi";
import Rezervari from "./pages/Rezervari";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <div className='App'>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Acasa />} />
            <Route exact path="/meniu" element={<Meniu />} />
            <Route exact path="/despre-noi" element={<DespreNoi />} />
            <Route exact path="/rezervari" element={<Rezervari />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
