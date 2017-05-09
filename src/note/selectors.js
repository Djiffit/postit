// @flow

import type {Selector} from '$src/types'

export const getNotes: Selector<*, *> = (state) => {
  const filter = state.board.noteFilter.toLowerCase()
  const notes = state.board.notes.filter((note) => note.message.toLowerCase().includes(filter))
  const {editing, showing} = state.board.showing
  const boardId = state.board.boards[state.board.active] === undefined ? 0 : state.board.boards[state.board.active].id
  return {notes, boardId, editing, showing}
}
