import React from 'react';
// import LogIn from './components/LogIn'
// import SignUp from './components/SignUp'
// import SubjectsShow from './components/SubjectsShow'
// import CoursesShow from './components/CoursesShow'
// import NotesList from './components/NotesList'
// import NoteNew from './components/NoteNew'
// import LandingPage from '.../containers/LandingPage'
// import HeaderContainer from '.../containers/HeaderContainer'
import NavRenderContainer from '../containers/NavRenderContainer'
import ReactDOM from 'react-dom';
import { Grid, Sticky, Table, Visibility, Container, Divider, Header, Menu, Message, Segment, Sidebar, Button, Image, Icon, Input, Form, TextArea} from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class NoteEdit extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      bullet: [],
      definition: [],
      img: [],
      text: [],
      code: [],
      equation: [],
      figure: []
    }
  }

  handleChange = (event) => {
    console.log(event);
    debugger
  }

  handleSubmit = () => {

  }

render(){
  const { value } = this.state

    return(
      <div>
      <Container style={{ padding: '5em 0em' }}>
      <h1> Create Your Note </h1>
      <Form onSubmit={this.handleSubmit}>
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={3}>
          <Form.Field control={Input} label='img' name='img' placeholder='Add Image URL' onChange={this.handleChange}/>
          <Button color='green' size='small'>Add Another Img</Button>
          </Grid.Column>
          <Grid.Column width={13}>
          <Form.Field control={TextArea} label='text' name='text' placeholder='Tell us more about your note...' onChange={this.handleChange} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3}>
          <Form.Field control={Input} label='bullet' placeholder='Bullet' onChange={this.handleChange} />
          <Form.Field control={Input} label='bullet' placeholder='Bullet' onChange={this.handleChange}/>
          <Form.Field control={Input} label='bullet' placeholder='Bullet' onChange={this.handleChange}/>
          <Form.Field control={Input} label='bullet' placeholder='Bullet' onChange={this.handleChange}/>
          <Button color='green' size='small'>Add Another Bullet</Button>
          </Grid.Column>
          <Grid.Column width={10}>
          <Form.Field control={TextArea} label='text' placeholder='Add intro paragraph' onChange={this.handleChange}/>
          <Form.Field control={TextArea} label='text' placeholder='Add supporting paragraph' onChange={this.handleChange}/>
          <Form.Field control={TextArea} label='text' placeholder='Add summary paragraph' onChange={this.handleChange}/>
          <Button color='green' size='small'>Add Another Text Area</Button>
          </Grid.Column>
          <Grid.Column width={3}>
          <Form.Field control={Input} label='equation' placeholder='Equation' onChange={this.handleChange}/>
          <Form.Field control={Input} label='equation' placeholder='Equation' onChange={this.handleChange}/>
          <Form.Field control={Input} label='equation' placeholder='Equation' onChange={this.handleChange}/>
          <Button color='green' size='small'>Add Another Equation</Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3}>
          <Form.Field control={Input} label='definition' placeholder='Add Definition' onChange={this.handleChange}/>
          <Form.Field control={Input} label='definition' placeholder='Add Definition' onChange={this.handleChange}/>
          <Form.Field control={Input} label='definition' placeholder='Add Definition' onChange={this.handleChange}/>
          <Form.Field control={Input} label='definition' placeholder='Add Definition' onChange={this.handleChange}/>
          <Button color='green' size='small'>Add Another Definition</Button>
          </Grid.Column>
          <Grid.Column width={10}>
          <Form.Field><label label='code' onChange={this.handleChange} >Add Code Snippet</label><input /></Form.Field>
          <Form.Field><label label='code' onChange={this.handleChange} >Add Code Snippet</label><input /></Form.Field>
          <Form.Field><label label='code' onChange={this.handleChange} >Add Code Snippet</label><input /></Form.Field>
          <Form.Field><label label='code' onChange={this.handleChange} >Add Code Snippet</label><input /></Form.Field>
          <Button color='green' size='small'>Add Another Snippet</Button>
          </Grid.Column>
          <Grid.Column width={3}>
          <Form.Field control={Input} label='figure' placeholder='Add Figure URL' onChange={this.handleChange}/>
          <Button color='green' size='small'>Add Another Figure</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
        </Form>
          <Button type="submit" color='orange' size='massive'>Save Note</Button>
      </Container>
      </div>
    )
  }

}

export default NoteEdit;
