import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './containers/LandingPage'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
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

  authorize = (Component) => {
    if(this.state.loggedIn){
      return <Component userInfo={this.state}/>
    } else {
      this.props.history.push('/home')
      return null
    }
  }

  render() {
    // console.log(this.state)
    return (
      <div className="App">
        <HeaderContainer loggedIn={this.state.loggedIn}
          logOut={this.logOut}
          username={this.state.username}/>
        <Switch>
<<<<<<< HEAD
          <Route exact path='/' component={() => this.authorize(NavRenderContainer)} />
=======
          <Route exact path='/' render={()=>{
              return this.state.loggedIn ? <NavRenderContainer /> : <LandingPage/>
            }} />
>>>>>>> b63bbe06725d8da2a6452114afb2356422ce831d

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
<<<<<<< HEAD
        <Route path='/home' render={() => <LandingPage/>}/>
        <Route path='/Buddy' component={() => this.authorize(NavRenderContainer)}/>
=======
        <Route path='/Buddy' render={() => <NavRenderContainer
            userInfo={this.state}/>
        }/>
        <Route path='/newnote' render={() => <NoteEdit
            userInfo={this.state}/>
        }/>
>>>>>>> b63bbe06725d8da2a6452114afb2356422ce831d
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
