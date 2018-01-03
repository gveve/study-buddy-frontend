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

  onTrans = () => {
    let notes = this.state.notes
    return notes.map((note, i) => {
      console.log(note);
      return (
        <Card>
        <Card.Content>
          <Image floated='right' size='mini' src='https://books.google.com/books/content?id=cjHkn_1F62oC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70BAwyqhdE53t7_N78qSx4IkUGBrQ-Kb5N_2ZjtlgHPnp-Odmp0q5l8PCznF31fww4UTQtrR5OeYBSIGxMIWIHIvqmybw7HOfQEczaVgH8jQYFFNNQ-oZF-GcWabrGmJeAzu382' />
          <Card.Header>
            Note Name: {note.name}
          </Card.Header>
          <Card.Meta>
          </Card.Meta>
          <Card.Description>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        </Card.Content>
        </Card>
      )
    })
  }
  //all notes each do list {link to note show}
  render(){

    return(
      <div>
      <Container style={{ padding: '5em 0em' }}>
      {this.onTrans()}
      </Container>
      </div>
    )
  }

}

export default NotesList;
