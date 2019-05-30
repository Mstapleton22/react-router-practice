import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Navigation from './components/Navigation'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

class App extends Component {
  state = {
    username: "Michael"
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Route
            path='/'
            component={Navigation}
          />
          <Switch>
            <Route
              exact path='/'
              // component={Home}
              render={
                (props) =>
                  <Home history={props.history} />

              }
            />
            <Route
              path='/about'
              // component={About}
              render={
                (props) =>
                  <About match={props.match} username={this.state.username} />
              }
            />
            <Route
              path='/contact'
              component={Contact}
            />
            <Route
              component={NotFound}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
