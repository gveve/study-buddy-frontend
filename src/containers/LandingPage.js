import React from 'react';
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Button, Icon, Segment } from 'semantic-ui-react'


class LandingPage extends React.Component{


  render(){

    return(
      <div>
        <div id="firstpage" className="first-page">
          <div id="firstpage-content">
            <Segment.Group horizontal>
              <Segment padded color='green'>
                <Link to='/login'>
                  <Button animated='vertical' color='green' size='massive'>
                    <Button.Content visible>Log In</Button.Content>
                    <Button.Content hidden>
                      <Icon name='sign in' />
                    </Button.Content>
                  </Button>
                </Link>
              </Segment>
              <Segment padded color='orange'>
                <Link to='/signup'>
                  <Button animated='vertical' color='orange' size='massive'>
                    <Button.Content visible>Sign Up</Button.Content>
                    <Button.Content hidden>
                      <Icon name='user' />
                    </Button.Content>
                  </Button>
                </Link>
              </Segment>
            </Segment.Group>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage;
