import React from 'react'

import './scss/List.scss'

import EditField from './EditField'

function List() {
  const [notes, setNote] = React.useState([])

  const addNote = () => {
    setNote([...notes, 'Hello'])
  }

  return (
    <div className={"container"}>
      <EditField />
      <div className={"list"}>
        {notes.map((note, index) => <p key={index}>{note}</p>)}
      </div>

      <button className={"buttonAdd"} onClick={addNote}>+</button>

    </div>
  );
}

export default List;
