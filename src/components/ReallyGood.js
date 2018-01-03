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

class reallyGood extends React.Component{
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

  let treated = new Object();
  let inputNumber = 1;

  function addOne(event) {
    inputNumber++
    let element = React.createElement("input", { type:"text", name:"input"+inputNumber, onKeyUp:{keyUp} })

    debugger
  }

    function keyUp(event) {
      // debugger
      if (event.target.value.length > 3 && treated[event.target.name] != 1){ addOne(); treated[event.target.name] = '1'; }
    }

    return(
      <div>
      <Form id="myForm">
      <div class="field">
      <div class="ui input">
      <input type="text" name="input1" value={this.state.value} onKeyUp={keyUp}>
      </input>
      </div>
      </div>
      </Form>
      </div>
    )
  }



  // <Container style={{ padding: '5em 0em' }}>
  // <h1> reallyGood </h1>
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

export default reallyGood;
