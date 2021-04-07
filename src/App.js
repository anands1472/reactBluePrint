import React, { Component } from 'react';
import "./App.css";
import Home from "./Container/Home/Home";
import Login from "./Container/Login/Login";
// import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import Hm2 from './Hm2'
import { BrowserRouter, Route ,Switch} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
        {/* <Login /> */}
        <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/as" component={Home} />
        </Switch>
        </header>
        {/* <Home/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
