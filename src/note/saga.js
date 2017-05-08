// @flow

import {takeLatest} from 'redux-saga'
import {fork, put} from 'redux-saga/effects'
import {handleDeleted, handleCreated, handleEdited} from './actions'
import {reset} from 'redux-form'

function* deleteNote(payload): Generator<> {
  const noteId = payload.payload
  const response = yield fetch(`http://localhost:1337/notes/${noteId}`, {
    method: 'DELETE',
  })
  const deleted = yield response.json()

  yield put(handleDeleted(deleted))
}

function* createNote(payload): Generator<> {
  const {boardId, message} = payload.payload
  const response = yield fetch(`http://localhost:1337/notes/${boardId}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({message: message}),
  })
  const created = yield response.json()
  yield put(handleCreated(created))
  yield put(reset('createNote'))
}

function* editNote(payload): Generator<> {
  const {message, noteId} = payload.payload
  const response = yield fetch(`http://localhost:1337/notes/${noteId}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({message: message}),
  })
  const edited = yield response.json()

  yield put(handleEdited(edited))
}

function* noteDone(payload): Generator<> {
  const {done, noteId} = payload.payload
  const response = yield fetch(`http://localhost:1337/notes/${noteId}/${done}`, {
    method: 'PUT',
  })
  const edited = yield response.json()
  yield put(handleEdited(edited))
}

export default function* (): Generator<> {
  yield [
    fork(function* (): Generator<> {
      yield takeLatest('DONE_NOTE', noteDone)
      yield takeLatest('DELETE_NOTE', deleteNote)
      yield takeLatest('CREATE_NOTE', createNote)
      yield takeLatest('EDIT_NOTE', editNote)
    }),
  ]
}
