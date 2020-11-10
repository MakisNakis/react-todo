import React from 'react'

import './scss/List.scss'

function List() {
  const [notes, setNote] = React.useState([])

  const addNote = () => {
    setNote([...notes, 'Hello'])
  }

  return (
    <div className={"container"}>
      <div className={"list"}>
        {notes.map((note, index) => <p key={index}>{note}</p>)}
      </div>

      <button className={"buttonAdd"} onClick={addNote}>+</button>

    </div>
  );
}

export default List;
