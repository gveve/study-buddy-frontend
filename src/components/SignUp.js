import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

class SignUp extends React.Component {
  state = {
    username: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  handleChange = (e) => {
    // debugger;
    this.setState({[e.target.name]: e.target.value})}


  signUp = () => {
    // debugger;
    console.log(this.state.username)
    const newUser = {method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: this.state.username,
      password_digest: this.state.password,
      first_name: this.state.firstName,
      last_name: this.state.lastName
    })}
    fetch('http://localhost:3000/users', newUser)
  }

  render(){

    return (
      <div>
        <input
          type='text'
          placeholder='First Name'
          name='firstName'
          value={this.state.firstName}
          onChange={this.handleChange}
        /> <br/>
        <input
          type='text'
          placeholder='Last Name'
          name='lastName'
          value={this.state.lastName}
          onChange={this.handleChange}
        /> <br/>
        <input
          type='text'
          placeholder='Username'
          name='username'
          value={this.state.username}
          onChange={this.handleChange}
        /> <br/>
        <input
          type='text'
          placeholder='Password'
          name='password'
          value={this.state.password}
          onChange={this.handleChange}
        /> <br/>

        <Link to="/Buddy"><button onClick={this.signUp}>Create Account!</button></Link>

      </div>
    )
  }
}

export default SignUp;
