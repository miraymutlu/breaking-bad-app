import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/index.jsx";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
