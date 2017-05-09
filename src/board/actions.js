// @flow

import {createAction} from 'redux-actions'

export const fetchBoards =
  createAction('FETCH_BOARDS')

export const deleteBoard =
  createAction('DELETE_BOARD')

export const receiveBoards =
  createAction('RECEIVE_BOARDS')

export const editBoard =
  createAction('EDIT_BOARD')

export const reset =
    createAction('RESET')

export const createBoard =
  createAction('CREATE_BOARD')

export const openBoard =
  createAction('OPEN_BOARD')

export const handleDeleted =
  createAction('HANDLE_DELETED_BOARD')

export const selectBoard =
  createAction('SELECT_BOARD')

export const handleEdited =
  createAction('HANDLE_EDITED_BOARD')

export const handleCreated =
  createAction('HANDLE_CREATED_BOARD')

export const changeBoardFilter =
  createAction('BOARD_FILTER_CHANGE')

export const showBoardEdit =
  createAction('SHOW_BOARD_EDIT')

export const hideBoardEdit =
  createAction('HIDE_BOARD_EDIT')
