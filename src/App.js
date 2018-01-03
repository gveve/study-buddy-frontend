import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './containers/LandingPage'
import { Route, Switch, Redirect } from 'react-router-dom';
import LogIn from './components/LogIn'
import NoteEdit from './components/NoteEdit'
import HeaderContainer from './containers/HeaderContainer'
import NavRenderContainer from './containers/NavRenderContainer'
import api from './AuthAdapter/api'
import SignUp from './components/SignUp'

class App extends Component {
  state = {
    loggedIn: false,
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    currentUser: {}
  }

  componentDidMount = () => {

    const token = localStorage.getItem('token')
    if (token) {
        api.auth.getCurrentUser().then(user =>{
          const currentUser = { currentUser: user };
          this.setState({currentUser})
        })
      };
    }

  handleChange = (e) => {this.setState({[e.target.name]: e.target.value})}

  signUp = () => {
    const newUser = {method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: this.state.username,
      password: this.state.password,
      first_name: this.state.firstName,
      last_name: this.state.lastName
    })}
    fetch('http://localhost:3000/api/v1/users', newUser)
    .then(res => res.json())
    .then(user => {
      this.setState({loggedIn: true, currentUser: user})
    })

  }

  logIn = () => {
    api.auth.login(this.state.username, this.state.password).then(user => {
        localStorage.setItem('token', user.token)
        this.setState({currentUser: user, loggedIn: true})
    })
  }

  logOut = () => {
    localStorage.removeItem('token')
    this.setState({currentUser: {}, loggedIn: false})
  }

  render() {
    // console.log(this.state)
    return (
      <div className="App">
        <HeaderContainer loggedIn={this.state.loggedIn}
          logOut={this.logOut}
          username={this.state.username}/>
        <Switch>
          <Route exact path='/' render={()=>{
              return this.state.loggedIn ? <NavRenderContainer /> : <LandingPage/>
            }} />

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
            userInfo={this.state} currentUser={this.state.currentUser}/>
        }/>
        <Route path='/newnote' render={() => <NoteEdit
            userInfo={this.state} currentUser={this.state.currentUser}/>
        }/>
        </Switch>
      </div>
    );
  }
}

export default App;
