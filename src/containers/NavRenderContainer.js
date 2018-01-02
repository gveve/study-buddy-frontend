import React from 'react';
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'
import SubjectsShow from '../components/SubjectsShow'
import CoursesShow from '../components/CoursesShow'
import NotesList from '../components/NotesList'
import NoteNew from '../components/NoteNew'
import LandingPage from '../containers/LandingPage'
import HeaderContainer from '../containers/HeaderContainer'
import { Grid, Sticky, Table, Visibility, Container, Divider, Header, Menu, Message, Segment, Sidebar, Button, Image, Icon, } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


class UserShow extends React.Component{
  constructor(props) {
    super(props);
    console.log('hello', props)
    this.state = {
      visible: false,
      type: '',
      subjects: [],
      courses: []
    }
  }

  showResponse = () => {
    fetch('http://localhost:3000/subjects').then(res => res.json()).then(response => this.setState({subjects:response}))
      fetch('http://localhost:3000/sub_headers').then(res => res.json()).then(response => this.setState({courses:response}))
  }

  componentDidMount = () => {
    this.showResponse()
  }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })

    handleRender = (event) => {
      // event.preventDefault()
      // console.log(event.currentTarget.innerText);
      // console.log(this.state.subjects);
      // console.log(this.state.courses);
      // debugger;
      this.setState({
        type:event.currentTarget.innerText
      })
    }


  render(){
    const { visible } = this.state

    let content

    switch (this.state.type) {
      case 'Subjects':
          content = <SubjectsShow response={this.state.subjects} />
        break;
      case 'Courses':
          content = <CoursesShow response={this.state.courses}/>
        break;
      case 'Notes':
          content = <NotesList courses={this.state.courses} subjects={this.state.subjects}/>
        break;
      case 'New Note':
          content = <NoteNew courses={this.state.courses} subjects={this.state.subjects}/>
        break;
      default:
          content = <p> Hey! </p>

    }
    return(
    <div>
    <Container >
    <Button onClick={this.toggleVisibility}>Menu</Button>
    </Container>
    <div>
    <Sidebar.Pushable as={Segment} >
      <Sidebar as={Menu} animation='scale down' width='thin' visible={visible} icon='labeled' vertical inverted>
        <Menu.Item name='home'>
          <Icon name='home' />
          Home
        </Menu.Item>
        <Menu.Item name='game' value='game' onClick={this.handleRender}>
          <Icon name='game' />
          Subjects
        </Menu.Item>
        <Menu.Item name='camera' onClick={this.handleRender}>
          <Icon name='camera' />
          Courses
        </Menu.Item>
        <Menu.Item name='camera'onClick={this.handleRender}>
          <Icon name='camera' />
          Notes
        </Menu.Item>
        <Menu.Item name='camera'onClick={this.handleRender}>
          <Icon name='camera' />
          New Note
        </Menu.Item>
      </Sidebar>
      <Sidebar.Pusher>
      <Segment
        textAlign='center'
        style={{ minHeight: 700}}
        vertical>
        <h1> Hey friend </h1>
        {content}
      </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
    </div>
    </div>
    )
  }

}

export default UserShow;
