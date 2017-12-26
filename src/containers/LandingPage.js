import React from 'react';
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';




class LandingPage extends React.Component{





  render(){

    return(
      <Router>
        <div>
          <Link to='LogIn'><button>Log In</button></Link>
        
        </div>
      </Router>
    )
  }
}

export default LandingPage;
