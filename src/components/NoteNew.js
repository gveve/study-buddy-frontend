import React from 'react';
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'
import LandingPage from '../containers/LandingPage'
import HeaderContainer from '../containers/HeaderContainer'
import NavRenderContainer from '../containers/NavRenderContainer'
import { Grid, Sticky, Table, Visibility, Container, Divider, Header, Menu, Message, Segment, Sidebar, Button, Image, Icon, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class NoteNew extends React.Component{
  constructor(props) {
    super(props);
      console.log("newnote", props);
      // debugger;
    this.state = {
      props: {props},
      courses: [],
      subjects: [],
      subject: [],
      course: [],
      note_name: '',
      filitered_courses: [],
      bullet: [],
      definition: [],
      img: [],
      text: [],
      code: [],
      equation: [],
      figure: []
    }
  }

  handleNewNote = (event) => {
      let thing = this.state
      // console.log(thing.props.props.currentUser.currentUser.id)
      // debugger
      const newNote = {method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.note_name,
        user_id: 1,
        sub_header_id: 1,
        subject_id: this.state.subject.id,
        bullet: this.state.bullet,
        definition: this.state.definition,
        img: this.state.img,
        code: this.state.code,
        equation: this.state.equation,
        figure: this.state.figure,
      })}
      // debugger;
      fetch('http://localhost:3000/api/v1/notes', newNote)
  }

  handleNote = (event, {value}) => {
    let subject = this.state.props.props.subjects
    let course = this.state.props.props.courses
    this.setState({
      note_name: value,
      subjects: subject,
      courses: course,
    })
    // console.log(event, {value})
  }

  handleSubject = (event, {value}) => {
    console.log(this.state.props.props.courses);
    console.log(this.props.subjects[value-1]);
    let unfiltered = this.state.courses
    // debugger;
    let filitered = unfiltered.filter((course) => (course.subject_id === value))
    let thing = this.props.subjects[value-1]
    this.setState({
      subject: thing,
      filitered_courses: filitered,
    })
  }

  handleCourse = (event, {value}) => {
    let thing = this.props.courses[value-1]
    this.setState({course: thing})
  }

  subjects = () => {
    // debugger
    let subject = this.state.props.props.subjects
    return subject.map((sub, i) => {
        return {key: i, text: `${sub.subject_name}`, value: sub.id}
      })
  }

  courses = () => {
    let course = this.state.filitered_courses
    return course.map((cor, i) => {
        return {key: i, text: `${cor.name}`, value: cor.id }
      })
  }

  handleChange = (event) => {
    // debugger
    event.preventDefault()
    if (event.target.name === 'img') {
      let arr = this.state.img
      arr.push(event.target.value);
      this.setState({img: arr})
    } if (event.target.name === 'bullet') {
      let arr = this.state.bullet
      arr.push(event.target.value);
      this.setState({bullet: arr})
    } if (event.target.name === 'definition') {
      let arr = this.state.definition
      arr.push(event.target.value);
      this.setState({definition: arr})
    } if (event.target.name === 'code') {
      let arr = this.state.code
      arr.push(event.target.value);
      this.setState({code: arr})
    } if (event.target.name === 'equation') {
      let arr = this.state.equation
      arr.push(event.target.value);
      this.setState({equation: arr})
    } if (event.target.name === 'figure') {
      let arr = this.state.figure
      arr.push(event.target.value);
      this.setState({figure: arr})
    } if (event.target.name === 'text') {
      let arr = this.state.text
      arr.push(event.target.value);
      this.setState({text: arr})
    }
  }

  render(){
    const { value } = this.state
    let sub_options = this.subjects()
    let cor_options = this.courses()

    return(
      <div>
      <Container style={{ padding: '5em 0em' }}>
      <Form onSubmit={this.handleNewNote}>
        <Form.Group widths='equal'>
          <Form.Field onChange={this.handleNote} name='note_name' value={value} control={Input} label='Note name' placeholder='Note name' />
          <Form.Field onChange={this.handleSubject} name='subject' control={Select} label='Subject' options={sub_options} placeholder='Subject' />
          <Form.Field onChange={this.handleCourse} name='course' value={value} control={Select} label='Course' options={cor_options} placeholder='Course' />
        </Form.Group>
        <h1> Create Your Note </h1>
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
            <Form.Field control={Input} label='bullet' name="bullet" placeholder='Bullet' onChange={this.handleChange} />
            <Form.Field control={Input} label='bullet' name="bullet" placeholder='Bullet' onChange={this.handleChange} />
            <Form.Field control={Input} label='bullet' name="bullet" placeholder='Bullet' onChange={this.handleChange} />
            <Form.Field control={Input} label='bullet' name="bullet" placeholder='Bullet' onChange={this.handleChange} />
            <Button color='green' size='small'>Add Another Bullet</Button>
            </Grid.Column>
            <Grid.Column width={10}>
            <Form.Field control={TextArea} label='text' name="text" placeholder='Add intro paragraph' onChange={this.handleChange}/>
            <Form.Field control={TextArea} label='text' name="text" placeholder='Add supporting paragraph' onChange={this.handleChange}/>
            <Form.Field control={TextArea} label='text' name='text' placeholder='Add summary paragraph' onChange={this.handleChange}/>
            <Button color='green' size='small'>Add Another Text Area</Button>
            </Grid.Column>
            <Grid.Column width={3}>
            <Form.Field control={Input} label='equation' name="equation" placeholder='Equation' onChange={this.handleChange}/>
            <Form.Field control={Input} label='equation' name="equation" placeholder='Equation' onChange={this.handleChange}/>
            <Form.Field control={Input} label='equation' name="equation" placeholder='Equation' onChange={this.handleChange}/>
            <Button color='green' size='small'>Add Another Equation</Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3}>
            <Form.Field control={Input} label='definition' name="definition" placeholder='Add Definition' onChange={this.handleChange}/>
            <Form.Field control={Input} label='definition' name="definition" placeholder='Add Definition' onChange={this.handleChange}/>
            <Form.Field control={Input} label='definition' name="definition" placeholder='Add Definition' onChange={this.handleChange}/>
            <Form.Field control={Input} label='definition' name="definition" placeholder='Add Definition' onChange={this.handleChange}/>
            <Button color='green' size='small'>Add Another Definition</Button>
            </Grid.Column>
            <Grid.Column width={10}>
            <Form.Field><label label='code' onChange={this.handleChange} name="code" >Add Code Snippet</label><input /></Form.Field>
            <Form.Field><label label='code' onChange={this.handleChange} name="code" >Add Code Snippet</label><input /></Form.Field>
            <Form.Field><label label='code' onChange={this.handleChange} name="code" >Add Code Snippet</label><input /></Form.Field>
            <Form.Field><label label='code' onChange={this.handleChange} name="code" >Add Code Snippet</label><input /></Form.Field>
            <Button color='green' size='small'>Add Another Snippet</Button>
            </Grid.Column>
            <Grid.Column width={3}>
            <Form.Field control={Input} label='figure' name="figure" placeholder='Add Figure URL' onChange={this.handleChange}/>
            <Button color='green' size='small'>Add Another Figure</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
            <Button type="submit" color='orange' size='massive'>Save Note</Button>
      </Form>
      </Container>
      </div>
    )
  }
}

export default NoteNew;
