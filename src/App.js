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
import { Segment } from 'semantic-ui-react'

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
        api.auth.getCurrentUser().then(currentUser =>{
          this.setState({currentUser, loggedIn: true}, this.props.history.push('/buddy'))
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
        this.setState({currentUser: user, loggedIn: true}, this.props.history.push('/buddy'))
    })
  }

  logOut = () => {
    localStorage.removeItem('token')
    this.setState({currentUser: {}, loggedIn: false})
  }

  authorize = (Component) => {
    // if(this.state.loggedIn && this.state.currentUser.username){
    //   return <Component userInfo={this.state}/>
    // } else if (this.state.loggedIn && this.props.location.pathname === '/home') {
    //   this.props.history.push('/buddy')
    //   return <Component userInfo={this.state}/>
    // }else {
    //   debugger;
    //   this.props.history.push('/home')
    //   return null
    // }

    return class extends React.Component{

      render(){
        console.log(this.state)
        if(localStorage.getItem('token') && this.props.location.pathname === '/home'){
          console.log('first')
          return <Redirect to='/buddy' />
        } else if (!localStorage.getItem('token') && this.props.location.pathname !== '/home') {
            console.log('second', localStorage.getItem('token'))
            return <Redirect to='/home' />
        } else {
          console.log('third')
          return <Component userInfo={this.state}/>
        }
      }
    }
  }

  render() {
    console.log(this.state)
    console.log(this.props)
    const AuthUser = this.authorize(NavRenderContainer)
    return (
      <div className="App">
        <Segment inverted color='black'>
        <HeaderContainer loggedIn={this.state.loggedIn}
          logOut={this.logOut}
          username={this.state.currentUser.username}/>
        <Switch>
          <Route exact path='/' component={AuthUser} />

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
        <Route path='/home' render={() => <LandingPage/>}/>
        <Route path='/Buddy' component={AuthUser}/>

        <Route path='/newnote' render={() => <NoteEdit
            userInfo={this.state}/>
        }/>
        </Switch>
      </Segment>
      </div>
    );
  }
}

export default withRouter(App);
