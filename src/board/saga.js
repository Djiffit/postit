// @flow

import {takeLatest} from 'redux-saga'
import {fork, put} from 'redux-saga/effects'
import {receiveBoards, selectBoard, handleDeleted, handleCreated, handleEdited, openBoard} from './actions'

function* fetchBoards(): Generator<> {
  const response = yield fetch(`${API_URL}/boards`)
  const boards = yield response.json()

  yield put(receiveBoards(boards))
  yield put(selectBoard({boardId: boards[0].id, index: 0}))
}

function* deleteBoard(payload): Generator<> {
  const boardId = payload.payload
  const response = yield fetch(`http://localhost:1337/boards/${boardId}`, {
    method: 'DELETE',
  })
  const deleted = yield response.json()

  yield put(handleDeleted(deleted))

  const newresponse = yield fetch(`${API_URL}/boards`)
  const boards = yield newresponse.json()

  yield put(receiveBoards(boards))
  yield put(selectBoard({boardId: boards[0].id, index: 0}))
}

function* createBoard(payload): Generator<> {
  const name = payload.payload
  const response = yield fetch(`http://localhost:1337/boards/`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name: name}),
  })
  const created = yield response.json()

  yield put(handleCreated(created))
}

function* showBoard(payload): Generator<> {
  const {boardId, index} = payload.payload
  console.log('show', payload)
  const response = yield fetch(`http://localhost:1337/boards/${boardId}`)
  const board = yield response.json()
  board.index = index

  yield put(openBoard(board))
}

function* editBoard(payload): Generator<> {
  console.log(payload)
  const {name, boardId} = payload.payload
  const response = yield fetch(`http://localhost:1337/boards/${boardId}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name: name}),
  })
  const edited = yield response.json()

  yield put(handleEdited(edited[0]))
}

export default function* (): Generator<> {
  yield [
    fork(function* (): Generator<> {
      yield takeLatest('FETCH_BOARDS', fetchBoards)
      yield takeLatest('DELETE_BOARD', deleteBoard)
      yield takeLatest('CREATE_BOARD', createBoard)
      yield takeLatest('EDIT_BOARD', editBoard)
      yield takeLatest('SELECT_BOARD', showBoard)
    }),
  ]
}
