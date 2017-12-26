import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './containers/LandingPage'
import { Route, Switch } from 'react-router-dom';
import HeaderContainer from './containers/HeaderContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <Switch>
          <Route exact path='/' component={LandingPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
