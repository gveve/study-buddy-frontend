import React from 'react';
import NoteNew from '../components/NoteNew'
import NotesShow from '../components/NotesShow'


class NoteContainer extends React.Component{

  render(){
    return(
      <div>
        <NotesShow />
        <NoteNew />
      </div>
    )
  }
}


export default NoteContainer;
