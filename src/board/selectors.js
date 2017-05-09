// @flow

import type {Selector} from '$src/types'
import type {Board} from './types'

export const getBoards: Selector<Array<Board>, *> = (state) => {
  const boards = state.board.boards.filter((board) => board.name.toLowerCase().includes(state.board.boardFilter.toLowerCase()))
  return boards
}

export const getBoard: Selector<Array<Board>, *> = (state) => {
  const {active, boards, boardShowing} = state.board
  if (boards === undefined || boards[active] === undefined) return {boardId: '', boardName: 'No board selected!'}
  return {boardId: boards[active].id, boardName: boards[active].name, boardShowing}
}
