import React from 'react';

class LogIn extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {this.setState({[e.target.name]: e.target.value})}

  signIn = () => {
    console.log('signed in')
  }

  render(){
    console.log(this.props)
    return (
      <div>
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
      <button >Login In!</button>

      </div>
    )
  }
}

export default LogIn;
