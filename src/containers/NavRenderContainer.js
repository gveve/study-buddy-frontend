import React from 'react';
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'
import SubjectsShow from '../components/SubjectsShow'
import CoursesShow from '../components/CoursesShow'
import NotesList from '../components/NotesList'
import NoteNew from '../components/NoteNew'
import NoteEdit from '../components/NoteEdit'
import LandingPage from '../containers/LandingPage'
import HeaderContainer from '../containers/HeaderContainer'
import { Grid, Sticky, Table, Visibility, Container, Divider, Header, Menu, Message, Segment, Sidebar, Button, Image, Icon, Input} from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


class NavRenderContainer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      userInfo:{props},
      visible: false,
      type: '',
      subjects: [],
      courses: [],
    }
  }

  showResponse = () => {
    fetch('http://localhost:3000/api/v1/subjects').then(res => res.json()).then(response => this.setState({subjects:response}))
      fetch('http://localhost:3000/api/v1/sub_headers').then(res => res.json()).then(response => this.setState({courses:response}))
  }

  componentDidMount = () => {
    this.showResponse()
  }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })

    handleRender = (event) => {
      this.setState({
        type:event.currentTarget.innerText
      })
    }



  render(){
    const { visible } = this.state
    const handleEdit = (props) => {
      // debugger
      content = <NoteEdit props={props} />
    }

    let content

    switch (this.state.type) {
      case 'Home':
          content = <LandingPage />
        break;
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
          content = <NoteNew courses={this.state.courses} subjects={this.state.subjects} userInfo={this.state.userInfo} handleEdit={handleEdit} />
        break;
      case 'Note Edit':
          content = <NoteEdit courses={this.state.courses} subjects={this.state.subjects} userInfo={this.state.userInfo}/>
        break;
      default:
          content = <p> Click menu to get started! </p>

    }
    return(
    <div>
    <Container >
    <Button onClick={this.toggleVisibility}>Menu</Button>
    </Container>
    <div>
    <Sidebar.Pushable as={Segment} >
      <Sidebar as={Menu} animation='slide along' width='thin' visible={visible} icon='labeled' vertical inverted>
        <Menu.Item name='home'onClick={this.handleRender}>
          <Icon name='home' />
          Home
        </Menu.Item>
        <Menu.Item name='align justify' onClick={this.handleRender}>
          <Icon name='align justify' />
          Subjects
        </Menu.Item>
        <Menu.Item name='list' onClick={this.handleRender}>
          <Icon name='list' />
          Courses
        </Menu.Item>
        <Menu.Item name='clone'onClick={this.handleRender}>
          <Icon name='clone' />
          Notes
        </Menu.Item>
        <Menu.Item name='edit'onClick={this.handleRender}>
          <Icon name='edit' />
          New Note
        </Menu.Item>
      </Sidebar>
      <Sidebar.Pusher>
      <Segment
        textAlign='center'
        style={{ minHeight: 500}}
        vertical>
        <h1> Hey Buddy </h1>
        {content}
      </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
    </div>
    </div>
    )
  }

}

export default NavRenderContainer;
