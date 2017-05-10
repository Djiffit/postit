// @flow

import React, {Component} from 'react'
import {connect} from 'react-redux'

import {deleteNote, createNote, editNote, changeBoard, doneNote, hideEditPopup, showEditPopup} from './actions'
import CreateNote from '../form/CreateNote'
import {getNotes} from './selectors'
import Popup from '../popup/Popup'
import css from './Notes.css'
import SingleNote from './Note'


import type {RootState} from '$src/root/types'
import type {Note} from './types'

type Props = {
  notes: Array<Note>,
  boardId: number,
  doneNote: Function,
  deleteNote: Function,
  createNote: Function,
  editNote: Function,
  showEditPopup: Function,
  hideEditPopup: Function,
  changeBoard: Function,
  editing: number,
  showing: boolean,
}
export class Notes extends Component {
  props: Props

  submitNote = (data: Object) => {
    this.props.createNote({message: data.message, boardId: this.props.boardId})
  }

  changeAction = (noteId: number, boardId: number) => this.props.changeBoard({boardId, noteId})

  cancelAction = () => this.props.hideEditPopup()

  editAction = (data) => this.props.editNote({noteId: this.props.editing, message: data.name})

  render() {
    const {deleteNote, doneNote, showEditPopup, showing} = this.props
    const popup = showing ? <Popup cancelAction={this.cancelAction.bind(this)}
      editAction={this.editAction.bind(this)}/> : null
    const notes = this.props.notes.map((note, index) => <SingleNote changeAction={this.changeAction.bind(this)} index={index} deleteNote={deleteNote} note={note} showEditPopup={showEditPopup} doneNote={doneNote}/>)
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

export default connect(mapStateToProps, {changeBoard, deleteNote, hideEditPopup, editNote, createNote, doneNote, showEditPopup})(Notes)
