import React from 'react';
import { Segment } from 'semantic-ui-react'

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
            <button type='submit'>Login In!</button>
          </form>
        </Segment>
      </div>
    )

}

export default LogIn;
