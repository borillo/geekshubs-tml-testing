import React from "react";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Bookshelf from "./Bookshelf/components/Bookshelf";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bookshelf">Bookshelf</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path="/bookshelf" element={<Bookshelf />} />
    </Routes>
  </BrowserRouter>
);

export default App;
