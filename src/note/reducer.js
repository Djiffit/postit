// @flow

import {handleActions} from 'redux-actions'

import type {Reducer} from '../types'
import type {Note} from './types'

export const noteReducer: Reducer<Array<Note>> = handleActions({
  RECEIVE_NOTES: (state, {payload}) => {
    return payload
  },
  HANDLE_DELETED_NOTE: (state, {payload}) => {
    return state.filter((note) => note.id !== payload.id)
  },
  HANDLE_EDITED_NOTE: (state, {payload}) => {
    return state.map((note) => note.id !== payload.id ? note : payload)
  },
  HANDLE_CREATED_NOTE: (state, {payload}) => {
    return [...state, payload]
  },
  SHOW_NOTE: (state, {payload}) => {
    return state.filter((note) => note.id !== payload.id)
  },
  OPEN_BOARD: (state, {payload}) => {
    return payload.notes
  },
}, [])

export default noteReducer
