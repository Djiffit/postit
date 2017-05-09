// @flow

import {combineReducers} from 'redux'
import {handleActions} from 'redux-actions'

import {noteReducer, showingReducer, noteFilterReducer} from '../note/reducer'
import type {Reducer} from '../types'
import type {Board} from './types'

export const boardReducer: Reducer<Array<Board>> = handleActions({
  RECEIVE_BOARDS: (state, {payload}) => {
    return payload
  },
  HANDLE_DELETED_BOARD: (state, {payload}) => {
    return state.filter((board) => board.id !== payload.id)
  },
  HANDLE_EDITED_BOARD: (state, {payload}) => {
    return state.map((board) => board.id !== payload.id ? board : payload)
  },
  HANDLE_CREATED_BOARD: (state, {payload}) => {
    return [...state, payload]
  },
}, [])

export const activeReducer: Reducer<number> = handleActions ({
  OPEN_BOARD: (state, {payload}) => {
    return payload.index
  },
  HANDLE_DELETED_BOARD: (state, {payload}) => {
    return 0
  },
}, 0)

export const editBoardReducer: Reducer<boolean> = handleActions ({
  SHOW_BOARD_EDIT: (state, {payload}) => {
    return true
  },
  HIDE_BOARD_EDIT: (state, {payload}) => {
    return false
  },
}, false)

export const boardFilterReducer: Reducer<string> = handleActions ({
  BOARD_FILTER_CHANGE: (state, {payload}) => {
    return payload
  }
}, '')

export default combineReducers({
  boards: boardReducer,
  notes: noteReducer,
  active: activeReducer,
  showing: showingReducer,
  boardShowing: editBoardReducer,
  boardFilter: boardFilterReducer,
  noteFilter: noteFilterReducer,
})
