import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import { Index } from "./Components/Index";
import { Movies } from "./Components/Movies/Movies";
import { Create } from "./Components/Movies/Create";

function App() {
  return (
    <div className="ui container">
      <Router>
        <div>
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

          {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact component={Index}></Route>
            <Route path="/movies" exact component={Movies}></Route>
            <Route path="/create" exact component={Create}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
