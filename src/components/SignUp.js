import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

const SignUp = ({handleChange, username, password, firstName, lastName, signUp}) =>{


    return (
      <div>
        <input
          type='text'
          placeholder='First Name'
          name='firstName'
          value={firstName}
          onChange={handleChange}
        /> <br/>
        <input
          type='text'
          placeholder='Last Name'
          name='lastName'
          value={lastName}
          onChange={handleChange}
        /> <br/>
        <input
          type='text'
          placeholder='Username'
          name='username'
          value={username}
          onChange={handleChange}
        /> <br/>
        <input
          type='text'
          placeholder='Password'
          name='password'
          value={password}
          onChange={handleChange}
        /> <br/>

        <Link to="/Buddy"><button onClick={signUp}>Create Account!</button></Link>

      </div>
    )

}

export default SignUp;
