import React from 'react';
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'
import { Route, Switch, Link, NavLink} from 'react-router-dom';


class LandingPage extends React.Component{
  state = {

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
      <h2>Hey Buddy!</h2>
        <div id="firstpage" className="first-page">
          <div id="firstpage-content">
          <Link to='/login'><button >Log In</button></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage;
