import React from 'react';
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'
import NavRenderContainer from '../containers/NavRenderContainer'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';



class LandingPage extends React.Component{


  render(){

    return(
      <div>
        <div id="firstpage" className="first-page">
          <div id="firstpage-content">
          <Link to='/login'><button >Log In</button></Link>
          <Link to='/signup'><button >Sign Up</button></Link>
          //if the user comes back valid  then render nav render container instad of log in and sign up
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage;
