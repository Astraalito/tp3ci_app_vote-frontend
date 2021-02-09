import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import './App.css';
import Vote from "./pages/Vote";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/login">Se connecter</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Vote />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
