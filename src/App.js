import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './containers/LandingPage'
import { Route, Switch } from 'react-router-dom';
import LogIn from './components/LogIn'

class App extends Component {

  
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/LogIn' component={LogIn}/>
        </Switch>
      </div>
    );
  }
}

export default App;
