import React from 'react';
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'
import LandingPage from '../containers/LandingPage'
import HeaderContainer from '../containers/HeaderContainer'
import NavRenderContainer from '../containers/NavRenderContainer'
import { Button, Container, Grid, Header, Icon, Image, Item, Label, Menu, Segment, Step, Table,
} from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


class SubjectsShow extends React.Component{
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      response: {props}
    }
  }

  subjects = () => {
    // debugger;
  // console.log(this.state.response.props.response);
  let subjects = this.state.response.props.response
      return subjects.map((sub, i) => {
        console.log(sub.subject_name);
        return (
        <Segment>{sub.subject_name}</Segment>
      )})
  }

  render(){

    const style = {
      h1: {
        marginTop: '3em',
      },
      h2: {
        margin: '4em 0em 2em',
      },
      h3: {
        marginTop: '2em',
        padding: '2em 0em',
      },
      last: {
        marginBottom: '300px',
      },
    }

    return(
      <div>
      <Container text>
        <Segment.Group>
        {this.subjects()}
        </Segment.Group>
      </Container>
      </div>
    )
  }

}

export default SubjectsShow;
