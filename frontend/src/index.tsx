import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Bookshelf from "./Bookshelf/components/Bookshelf";

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

    <Switch>
      <Route path="/bookshelf" component={Bookshelf} />
    </Switch>
  </>
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
