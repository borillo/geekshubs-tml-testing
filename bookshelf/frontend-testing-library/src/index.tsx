import React from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Bookshelf from "./Bookshelf/components/Bookshelf";

import "./index.css";

const App = () => (
  <>
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
  </>
);

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
