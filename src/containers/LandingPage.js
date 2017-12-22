import React from 'react';
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'
import { Route, Switch, Link } from 'react-router-dom';



class LandingPage extends React.Component{
  state = {
    loginUsername: '',
    loginPassword: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  signIn = () => {
    console.log('signed in')

  }

  render(){
    console.log('username: ', this.state.loginUsername)
    console.log('password: ', this.state.loginPassword)

    return(
      <div>
        <Link to='LogIn'><button>Log In</button></Link>
        <Switch>
          <Route
            path='/LogIn'
            render={() => {
              return(
                <LogIn
                  loginUsername={this.state.loginUsername}
                  handleChange={this.handleChange}
                  loginPassword={this.state.loginPassword}
                  signIn={this.signIn}
                  />
              );
            }}
            />
        </Switch>
      </div>
    )
  }
}

export default LandingPage;
