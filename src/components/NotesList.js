import React from 'react';
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'
import LandingPage from '../containers/LandingPage'
import HeaderContainer from '../containers/HeaderContainer'
import NavRenderContainer from '../containers/NavRenderContainer'
import { Grid, Sticky, Table, Visibility, Container, Divider, Header, Menu, Message, Segment, Sidebar, Button, Image, Icon, Checkbox, Form, Input, Radio, Select, TextArea, Card} from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


class NotesList extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      notes: []
    }
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/api/v1/notes").then(res => res.json()).then(response => this.setState({notes: response}))
  }
  //all notes each do list {link to note show}
  render(){

    function onTrans() {
      return this.state.notes.map((note, i) => {
        console.log(note);
        return (
          <Card>
  <Card.Content>
    <Image floated='right' size='mini' src='/assets/images/avatar/large/steve.jpg' />
    <Card.Header>
      Steve Sanders
    </Card.Header>
    <Card.Meta>
      Friends of Elliot
    </Card.Meta>
    <Card.Description>
      Steve wants to add you to the group <strong>best friends</strong>
    </Card.Description>
  </Card.Content>
  <Card.Content extra>
    <div className='ui two buttons'>
      <Button basic color='green'>Approve</Button>
      <Button basic color='red'>Decline</Button>
    </div>
  </Card.Content>
</Card>
        )
      })
    }

    return(
      <div>
      {onTrans()}
      </div>
    )
  }

}

export default NotesList;
