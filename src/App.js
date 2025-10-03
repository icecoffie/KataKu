import React from "react";
import Navbar from "./Components/Navbar";  // Pastikan file bernama Navbar.js
import TextForm from "./Components/TextForm";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar />

        <div className="container my-4">
          <Routes>
            {/* Halaman utama: Word Counter */}
            <Route path="/" element={<TextForm />} />

            {/* Contoh halaman About */}
            <Route path="/about" element={<div className="text-light">Dibuat oleh Malika Shakila 🧊</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
