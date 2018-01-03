import React from 'react';
import { Header, Segment, Button, Icon } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';


const HeaderContainer = ({loggedIn, username, logOut}) => {
    return(
      <div>
        <Segment.Group horizontal >
          <Segment color='green'><Header as='h1' textAlign='center'>Study Buddy</Header></Segment>
          {loggedIn ? <Segment color='red'><Header as='h1' textAlign='center'>Welcome {username}</Header></Segment> : null}
          {loggedIn ? <Segment color='green'><Link to='/'><Button animated='fade' color='red' floated='right' onClick={logOut}>
            <Button.Content visible>Sign Out</Button.Content>
            <Button.Content hidden>
              <Icon name='sign out' />
            </Button.Content>
          </Button></Link></Segment> : null}
        </Segment.Group>
      </div>
    )

}


export default HeaderContainer;
