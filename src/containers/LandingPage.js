import React from 'react';
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'
import NavRenderContainer from '../containers/NavRenderContainer'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react'


class LandingPage extends React.Component{
  state = {
    isValidUser: false
  }

  findUser = (user) => {
    console.log('user: ',user)
  }



  render(){

    return(
      <div>
        <div id="firstpage" className="first-page">
          <div id="firstpage-content">
          <Link user={this.findUser()} to='/login'>
            <Button animated='vertical' color='green' size='massive'>
              <Button.Content visible>Log In</Button.Content>
              <Button.Content hidden>
                <Icon name='sign in' />
              </Button.Content>
            </Button>
          </Link>
        <Link to='/signup'><Button animated='vertical' color='orange' size='massive'>
            <Button.Content visible>Sign Up</Button.Content>
            <Button.Content hidden>
              <Icon name='user' />
            </Button.Content>
          </Button></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage;
