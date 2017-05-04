// @flow

import type {Selector} from '$src/types'

export const getNotes: Selector<*, *> = (state) => {
  const notes = state.board.notes
  const boardId = state.board.boards[state.board.active] === undefined ? 0 : state.board.boards[state.board.active].id
  return {notes, boardId}
}
