import React from 'react';
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';




class LandingPage extends React.Component{





  render(){

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
