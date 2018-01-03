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
import { Grid, Sticky, Table, Visibility, Container, Divider, Header, Menu, Message, Segment, Sidebar, Button, Image, Icon, Input, Form } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class NoteEdit extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      bullets: [],
      definitions: [],
      imgs: [],
      texts: [],
      codes: [],
      equations: [],
      figures: []
    }
  }

render(){
  const { value } = this.state

    return(
      <div>
      <Container style={{ padding: '5em 0em' }}>
      <h1> NoteEdit </h1>
      <Form>
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={8}>
          <Form.Field onChange={this.handleInput} name='bullet' value={ value } control={Input} label='bullet' placeholder='bullet list' />
          <Form.Field onChange={this.handleInput2} name='bullet' value={ value } control={Input} label='bullet' placeholder='bullet list' />
          </Grid.Column>
          <Grid.Column width={8}>
          <Form.Field onChange={this.handleInput} name='bullet' value={ value } control={Input} label='bullet' placeholder='bullet list' />
          <Form.Field onChange={this.handleInput2} name='bullet' value={ value } control={Input} label='bullet' placeholder='bullet list' />
          </Grid.Column>
        </Grid.Row>
        </Grid>
        </Form>
      </Container>
      </div>
    )
  }



  // <Container style={{ padding: '5em 0em' }}>
  // <h1> NoteEdit </h1>
  // <Form>
  // <Grid celled>
  //   <Grid.Row>
  //     <Grid.Column width={8}>
  //     <Form.Field onChange={this.handleInput} name='bullet' value={ value } control={Input} label='bullet' placeholder='bullet list' />
  //     <Form.Field onChange={this.handleInput2} name='bullet' value={ value } control={Input} label='bullet' placeholder='bullet list' />
  //     </Grid.Column>
  //     <Grid.Column width={8}>
  //     <Form.Field onChange={this.handleInput} name='bullet' value={ value } control={Input} label='bullet' placeholder='bullet list' />
  //     <Form.Field onChange={this.handleInput2} name='bullet' value={ value } control={Input} label='bullet' placeholder='bullet list' />
  //     </Grid.Column>
  //   </Grid.Row>
  //   </Grid>
  //   </Form>
  // </Container>

// render() {
//   return (
//     <div className="Overview">
//       <p>Overview</p>
//       <button onClick={this.createProject.bind(this)}>New Project</button>
//       <Project />
//       <div>
//         {this.state.itemArray.map((item, index) => {
//           return (
//             <div className="box" key={index}>
//                 <div>
//                  <h2>{item.title}</h2>
//                  <p>{item.text}</p>
//                </div>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   );
// }

}

export default NoteEdit;
