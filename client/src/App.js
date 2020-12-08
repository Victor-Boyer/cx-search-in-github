import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import DataBody from "./component/DataBody";
import SearchUser from "./component/SearchUser";
import NavBar from "./component/NavBar";
import SingleUser from "./component/SingleUser";
import { BrowserRouter, Switch, Route } from "react-router-dom";
require("isomorphic-fetch");

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar></NavBar>
          <Switch>
            <Route path="/search" component={SearchUser} />
            <Route exact path="/:username" component={SingleUser} />
            <Route exact path="/" component={DataBody} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
