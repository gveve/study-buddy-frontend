import React from 'react';
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'
import LandingPage from '../containers/LandingPage'
import HeaderContainer from '../containers/HeaderContainer'
import { Grid, Sticky, Table, Visibility, Container, Divider, Header, Menu, Message, Segment, Sidebar, Button, Image, Icon, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class NoteNew extends React.Component{
  constructor(props) {
    super(props);
      console.log(props);
      // debugger;
    this.state = {
      props: {props},
      courses: [],
      subjects: [],
      subject: [],
      course: [],
      note_name: '',
      template: null,
      filitered_courses: []
    }
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

  handleTemplate = (event, value) => {
    console.log(event, value.value)
    let thing = value.value
    console.log(this.props.setTemplate);
    this.props.setTemplate(value)
    this.setState({template: thing})
  }


  handleNewNote = (event, {value}) => {
      //function post request
  }

  subjects = () => {
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

  render(){
    const { value } = this.state
    let sub_options = this.subjects()
    let cor_options = this.courses()

    return(
      <div>
      <Container style={{ padding: '5em 0em' }}>
      <Form>
        <Form.Group widths='equal'>
          <Form.Field onChange={this.handleNote} name='note_name' value={value} control={Input} label='Note name' placeholder='Note name' />
          <Form.Field onChange={this.handleSubject} name='subject' control={Select} label='Subject' options={sub_options} placeholder='Subject' />
          <Form.Field onChange={this.handleCourse} name='course' value={value} control={Select} label='Course' options={cor_options} placeholder='Course' />
        </Form.Group>
        <Form.Group inline>
        <Form.Field control={Button}>Submit</Form.Field>
        </Form.Group>
      </Form>
      </Container>
      </div>
    )
  }
}

export default NoteNew;
