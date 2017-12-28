import React from 'react';
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'
import LandingPage from '../containers/LandingPage'
import HeaderContainer from '../containers/HeaderContainer'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


class UserShow extends React.Component{
  constructor() {
    super();
  }

  render(){

    return(
    <div>
    <Subjects show> 
    <Courses show>
    <notes show>
    <new note>
    </div>
    )
  }

}

export default UserShow;
