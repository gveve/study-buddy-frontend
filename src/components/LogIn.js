import React from 'react';
import { Segment, Button } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const LogIn = ({handleChange, username, password, logIn}) => {
    return (
      <div>
        <Segment padded inverted color='olive' attached='top'  >
          <form onSubmit={logIn}>
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
          <Link to="/Buddy"><Button>Log In!</Button></Link>
          </form>
        </Segment>
      </div>
    )

}

export default LogIn;
