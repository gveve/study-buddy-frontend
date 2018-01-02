import React from 'react';
import { Segment, Button } from 'semantic-ui-react'
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
=======
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

>>>>>>> 2c30bb616687ff90d1beed4f3b780a03055c9456

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
