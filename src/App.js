import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './containers/LandingPage'
import { Route, Switch } from 'react-router-dom';
import LogIn from './components/LogIn'
import HeaderContainer from './containers/HeaderContainer'
import SignUp from './components/SignUp'
import NoteNew from './components/NoteNew'
import NavRenderContainer from './containers/NavRenderContainer'



class App extends Component {

  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/LogIn' component={LogIn}/>
          <Route path='/SignUp' component={SignUp}/>
          <Route path='/Buddy' component={NavRenderContainer}/>
          <Route path='/newnote' component={NoteNew}/>
        </Switch>
      </div>
    );
  }
}

export default App;
