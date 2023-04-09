import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Names from "./components/others"
import Home from "./components/Home"
import "./App.css";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/name/:id" element={<Names />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
