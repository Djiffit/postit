// @flow

import React, {Component} from 'react'
import {connect} from 'react-redux'

import {deleteNote, createNote, editNote, doneNote} from './actions'
import {getNotes} from './selectors'
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
  render() {
    const {createNote, editNote, deleteNote, doneNote, boardId} = this.props
    const notes = this.props.notes.map((note, index) =>
              <div key={index} className={css.row}>
                <div key={index} className={css.pullRight}>
                  <button key={index + 'd'} onClick={() => deleteNote(note.id)} className={css.inlineBtn}>Delete</button>
                  <button key={index + 'e'} onClick={() => editNote({noteId: note.id, message: prompt('Enter message', '')})} className={css.inlineBtn}>Edit</button>
                </div>
                <h3 className={note.done ? css.done : css.notdone}
                  onClick={() => doneNote({done: note.done ? 'undone' : 'done', noteId: note.id})}>
                  <p className={css.overflow} key={index}>{note.message}</p>
                </h3>
              </div>
            )
    return (
      <div className={css.component}>
        <button className={css.addBtn} onClick={() => createNote({boardId, message: prompt('Enter a message', '')})}>Add Note</button>
        {
          notes
        }
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => (getNotes(state))

export default connect(mapStateToProps, {deleteNote, editNote, createNote, doneNote})(Notes)
