<<<<<<< HEAD
// patch for the edit Note
import React from 'react';


export default class NoteNew extends React.Component {
  state = {
    name: '',
    subject: '',
    course: '',
    template: ''
  }

  handleChange = (e) => {this.setState({[e.target.name]: e.target.value})}


  render(){
    return (
      <div>
        <form >
          <input></input>
          <input></input>
          <input></input>
        </form>
=======
import React from 'react';
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'
import LandingPage from '../containers/LandingPage'
import HeaderContainer from '../containers/HeaderContainer'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


class NoteNew extends React.Component{
  constructor() {
    super();
  }

  function post request


  render(){

    return(
      <div>
      <form>
      inputs
      </form>
>>>>>>> 4a62570affd682dd7c859532340aaf3e5e816cdf
      </div>
    )
  }

}
<<<<<<< HEAD
=======

export default NoteNew;
>>>>>>> 4a62570affd682dd7c859532340aaf3e5e816cdf
