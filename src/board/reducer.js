// @flow

import {combineReducers} from 'redux'
import {handleActions} from 'redux-actions'

import noteReducer from '../note/reducer'
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

export default combineReducers({
  boards: boardReducer,
  notes: noteReducer,
  active: activeReducer,
})
