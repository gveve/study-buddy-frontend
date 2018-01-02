import React from 'react';
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react'


class LandingPage extends React.Component{


  render(){

    return(
      <div>
        <div id="firstpage" className="first-page">
          <div id="firstpage-content">
<<<<<<< HEAD
          <Link to='/login'>
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
=======
          <Link to='/login'><button >Log In</button></Link>
          <Link to='/signup'><button >Sign Up</button></Link>
          //if the user comes back valid  then render nav render container instad of log in and sign up
>>>>>>> 4a62570affd682dd7c859532340aaf3e5e816cdf
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage;
