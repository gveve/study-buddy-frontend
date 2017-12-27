import React from 'react';

class SignUp extends React.Component {
  state = {
    username: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  handleChange = (e) => {this.setState({[e.target.name]: e.target.value})}


  signUp = () => {
    const newUser = {method: 'post', headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, body: JSON.stringify({
      username: this.state.username,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName
    })}
    fetch('http://localhost:3001/users', newUser)
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

      <button onClick={this.signUp}>Create Account!</button>

      </div>
    )
  }
}

export default SignUp;
