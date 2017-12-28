import React from 'react';
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'
import LandingPage from '../containers/LandingPage'
import HeaderContainer from '../containers/HeaderContainer'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


class Hamburger extends React.Component{
  constructor() {
    super();
  }

  render(){

    return(
      <div>
      <Subjects show> within nav render 
      <Courses show> within nav render
      <notes show> within nav render
      <new note> within nav render
      </div>
    )
  }

}

export default Hamburger;
