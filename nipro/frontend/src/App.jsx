import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.css";
import Homepage from "./pages/Homepage/Homepage";

export default function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}
