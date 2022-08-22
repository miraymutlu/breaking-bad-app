import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/index.jsx";
import Detail from "./pages/Detail/index.jsx";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/char/:char_id" element={<Detail />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
