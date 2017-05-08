// @flow

import type {Selector} from '$src/types'
import type {Board} from './types'

export const getBoards: Selector<Array<Board>, *> = (state) => {
  return state.board.boards
}

export const getBoard: Selector<Array<Board>, *> = (state) => {
  const {active, boards} = state.board
  if (boards === undefined || boards[active] === undefined) return {boardId: '', boardName: 'No board selected!'}
  return {boardId: boards[active].id, boardName: boards[active].name}
}
