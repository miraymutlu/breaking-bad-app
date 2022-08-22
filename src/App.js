import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home/index.jsx";
import Detail from "./pages/Detail/index.jsx";

function App() {
  return (
    <Router>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
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
