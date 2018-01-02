import React from 'react';
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'
import LandingPage from '../containers/LandingPage'
import HeaderContainer from '../containers/HeaderContainer'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


class reallyGood extends React.Component{
  constructor() {
    super();
  }

  //function post request


  render(){

    return(
      <div>
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={3}>
           <Input placeholder='Search...' />
          </Grid.Column>
          <Grid.Column width={13}>
          <div class="ui bulleted list">
          <div class="item"><Input placeholder='Search...' /></div>
          <div class="item">Inviting Friends</div>
          </div>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={3}>
            <Input placeholder='Search...' />
          </Grid.Column>
          <Grid.Column width={10}>
          <div class="ui bulleted list">
          <div class="item">Gaining Access</div>
          <div class="item">Inviting Friends</div>
          </div>
          </Grid.Column>
          <Grid.Column width={3}>
            <Input placeholder='Search...' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    )
  }

}

export default reallyGood;
