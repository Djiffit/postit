// @flow

import {createAction} from 'redux-actions'

export const doneNote =
  createAction('DONE_NOTE')

export const deleteNote =
  createAction('DELETE_NOTE')

export const handleDone =
  createAction('HANDLE_DONE')

export const editNote =
  createAction('EDIT_NOTE')

export const createNote =
  createAction('CREATE_NOTE')

export const handleDeleted =
  createAction('HANDLE_DELETED_NOTE')

export const showNotes =
  createAction('SHOW_NOTES')

export const handleEdited =
  createAction('HANDLE_EDITED_NOTE')

export const handleCreated =
  createAction('HANDLE_CREATED_NOTE')

export const showEditPopup =
  createAction('SHOW_EDIT_POPUP')

export const hideEditPopup =
  createAction('HIDE_EDIT_POPUP')

export const changeNoteFilter =
  createAction('NOTE_FILTER_CHANGE')
