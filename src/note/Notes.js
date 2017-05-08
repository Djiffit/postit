// @flow

import React, {Component} from 'react'
import {connect} from 'react-redux'

import {deleteNote, createNote, editNote, doneNote} from './actions'
import CreateNote from '../form/CreateNote'
import {getNotes} from './selectors'
import Popup from '../popup/Popup'
import css from './Notes.css'

import type {RootState} from '$src/root/types'
import type {Note} from './types'

type Props = {
  notes: Array<Note>,
  boardId: number,
  doneNote: Function,
  deleteNote: Function,
  createNote: Function,
  editNote: Function,
}

export class Notes extends Component {
  props: Props
  constructor() {
    super()
    this.state = {isShowing: false, noteId: ''}
  }


  submitNote = (data: Object) => {
    this.props.createNote({message: data.message, boardId: this.props.boardId})
  }

  cancelAction = () => this.setState({isShowing: false})

  editAction = (data) => {
    this.props.editNote({noteId: this.state.noteId, message: data.name})
    this.setState({isShowing: false})
  }

  render() {
    const popup = this.state.isShowing ? <Popup cancelAction={this.cancelAction.bind(this)}
      editAction={this.editAction.bind(this)}/> : null
      const {createNote, editNote, deleteNote, doneNote, boardId} = this.props
      const notes = this.props.notes.map((note, index) =>
      <div key={index} className={css.row}>
        <div key={index} className={css.pullRight}>
          <button key={index + 'd'} onClick={() => deleteNote(note.id)} className={css.inlineBtn}>Delete</button>
          <button key={index + 'e'} onClick={() => this.setState({isShowing: true, noteId: note.id})} className={css.inlineBtn}>Edit</button>
        </div>
        <h3 className={note.done ? css.done : css.notdone}
          onClick={() => doneNote({done: note.done ? 'undone' : 'done', noteId: note.id})}>
          <p className={css.overflow} key={index}>{note.message}</p>
        </h3>
      </div>
    )
    return (
      <div>
        {popup}
        <CreateNote submitForm={this.submitNote.bind(this)} onSubmit={this.submitNote.bind(this)}/>

        <div className={css.component}>
          {
            notes
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => (getNotes(state))

export default connect(mapStateToProps, {deleteNote, editNote, createNote, doneNote})(Notes)
