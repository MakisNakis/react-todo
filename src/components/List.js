import React from 'react'
import {connect} from 'react-redux'
import { makeStyles} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';

import {addNotes} from '../actions/list'

import './scss/List.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function List(props) {
  // const [notes, setNote] = React.useState([])

  // const addNote = () => {
  //   setNote([...notes, 'Hello'])
  // }

  // const addNote = () => {

  // }

  const classes = useStyles();

  const newNote = {
    id: 2,
    text: 'HIHIHI'
  }

  const {notes} = props.list
  console.log(notes)
  const { addNotes } = props;

  return (
    <div className={"container"}>
      <div className={"list"}>
        {notes.map((note, index) => <Card key={index}>{note.text}</Card>)}
      </div>

      <Fab color="primary" className={classes.extendedIcon} aria-label="add" onClick={addNotes.bind(this, newNote)}>
        <AddIcon />
      </Fab>

      {/* <button className={"buttonAdd"} onClick={addNotes.bind(this, newNote)}>+</button> */}

    </div>
  );
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  addNotes: notes => dispatch(addNotes(notes))
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
