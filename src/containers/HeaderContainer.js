import React from 'react';
import { Header, Segment } from 'semantic-ui-react'

class HeaderContainer extends React.Component{

  render(){
    return(
      <div>
        <Segment>
          <Header as='h1' textAlign='center'>Study Buddy</Header>
        </Segment>
      </div>
    )
  }
}


export default HeaderContainer;
