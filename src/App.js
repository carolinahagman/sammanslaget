import "./App.css";
import React from "react";

import Story from "./components/Story";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Story} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
