import React, { Component } from "react";
import "./App.css";
import Home from "./Container/Home/Home";
import Login from "./Container/Login/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/HomePage" component={Home} />
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
