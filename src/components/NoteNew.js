<<<<<<< HEAD
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

  handleChange = (event) => {
    // debugger
    console.log(event);
  }

  subjects = () => {
    console.log(this.state.props.props.subjects);
    let subject = this.state.props.props.subjects
    return subject.map((sub, i) => {
      // debugger;
        console.log(sub.subject_name)
        // { key: 'f', text: 'Female', value: 'female' }
        return {key: i, text: `${sub.subject_name}`, value: sub.subject_name}
      })
  }

  courses = () => {
    console.log(this.state.props.props.courses);
    let course = this.state.props.props.courses
    return course.map((cor, i) => {
      // debugger;
        console.log(cor.name)
        // { key: 'f', text: 'Female', value: 'female' }
        return {key: i, text: `${cor.name}`, value: cor}
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
            <pre>Current value: {value}</pre>
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
=======
// patch for the edit Note
import React from 'react';


export default class NoteNew extends React.Component {
  state = {
    name: '',
    subject: '',
    course: '',
    template: ''
  }

  handleChange = (e) => {this.setState({[e.target.name]: e.target.value})}


  render(){
    return (
      <div>
        <form>
          <input></input>
          <input></input>
          <input></input>
        </form>
>>>>>>> 1f4aa1684084a26d5544dd9ab754560cbb15ebc0
      </div>
    )
  }

}
<<<<<<< HEAD

export default NoteNew;
=======
>>>>>>> 1f4aa1684084a26d5544dd9ab754560cbb15ebc0
