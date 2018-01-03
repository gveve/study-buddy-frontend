import React from 'react';
import { Segment, Button, Input } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';


const LogIn = ({handleChange, username, password, logIn}) => {
    return (
      <div>
        <Segment padded inverted color='green' attached='top' >
            <Input
              type='text'
              placeholder='Username'
              name='username'
              value={username}
              onChange={handleChange}
            /> <br/>
          <Input
              type='text'
              placeholder='Password'
              name='password'
              value={password}
              onChange={handleChange}
            /> <br/>
          <Link to="/Buddy"><Button onClick={logIn}>Log In!</Button></Link>

        </Segment>
      </div>
    )

}

export default LogIn;
