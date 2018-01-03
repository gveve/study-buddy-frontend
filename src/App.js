import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './containers/LandingPage'
import { Route, Switch } from 'react-router-dom';
import LogIn from './components/LogIn'
import NoteEdit from './components/NoteEdit'
import HeaderContainer from './containers/HeaderContainer'
import NavRenderContainer from './containers/NavRenderContainer'
import SignUp from './components/SignUp'


class App extends Component {
  state = {
    username: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  handleChange = (e) => {
    console.log(e);
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  signUp = () => {
    const newUser = {method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: this.state.username,
      password_digest: this.state.password,
      first_name: this.state.firstName,
      last_name: this.state.lastName
    })}
    fetch('http://localhost:3000/users', newUser)
  }

  logIn = () => {

  }

  render() {

    return (
      <div className="App">
        <HeaderContainer />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/LogIn' render={() => <LogIn
            handleChange={this.handleChange}
            username={this.state.username}
            password={this.state.password}
            logIn={this.logIn}/>
          }/>
          <Route path='/SignUp' render={() => <SignUp
            handleChange={this.handleChange}
            username={this.state.username}
            password={this.state.password}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            signUp={this.signUp}/>
          }/>
        <Route path='/Buddy' render={() => <NavRenderContainer
            userInfo={this.state}/>
        }/>
        <Route path='/newnote' render={() => <NoteEdit
            userInfo={this.state}/>
        }/>
        </Switch>
      </div>
    );
  }
}

export default App;
