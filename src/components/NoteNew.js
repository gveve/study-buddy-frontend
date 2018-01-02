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
      // console.log(props);
      // debugger;
    this.state = {
      props: {props},
    }
  }

  handleChange = (event, {value}) => {
    // let thing = this.state.props.props.courses[value-1]
    // this.setState({: thing})
    console.log(event, {value})
    // console.log(value)
    console.log(this.props.courses[value-1]);
    // debugger
  }

  subjects = () => {
    // console.log(this.state.props.props.subjects);
    let subject = this.props.subjects
    return subject.map((sub, i) => {
      // debugger;
        console.log(sub.subject_name)
        // { key: 'f', text: 'Female', value: 'female' }
        return {key: i, text: `${sub.subject_name}`, value: sub.subject_name}
      })
  }

  courses = () => {
    console.log(this.props.courses);
    let course = this.state.props.props.courses
    return course.map((cor, i) => {
      // debugger;
        // console.log(cor.id)
        return {key: i, text: `${cor.name}`, value: cor.id }
      })
  }

  //function post request

  render(){
    const { value } = this.state
    let sub_options = this.subjects()
    let cor_options = this.courses()

    return(
      <div>
      <Container style={{ padding: '5em 0em' }}>
      <Segment secondary>
            <pre>Current value:{value}</pre>
          </Segment>
      <Form>
        <Form.Group widths='equal'>
          <Form.Field onChange={this.handleChange} name='note_name' value={value} control={Input} label='Note name' placeholder='Note name' />
          <Form.Field onChange={this.handleChange} name='subject' control={Select} label='Subject' options={sub_options} placeholder='Subject' />
          <Form.Field onChange={this.handleChange} name='course' value={value} control={Select} label='Course' options={cor_options} placeholder='Course' />
        </Form.Group>
        <Form.Group inline>
          <label>Quantity</label>
          <Form.Field control={Radio} label='One' value='1' checked={value === '1'} onChange={this.handleChange} />
          <Form.Field control={Radio} label='Two' value='2' checked={value === '2'} onChange={this.handleChange} />
          <Form.Field control={Radio} label='Three' value='3' checked={value === '3'} onChange={this.handleChange} />
        </Form.Group>
        <Form.Field control={TextArea} label='About' placeholder='Tell us more about you...' />
        <Form.Field control={Checkbox} label='I agree to the Terms and Conditions' />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
      </Container>
      </div>
    )
  }

}

export default NoteNew;
