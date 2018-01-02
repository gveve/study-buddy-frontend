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
      </div>
    )
  }

}
