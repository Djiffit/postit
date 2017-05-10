// @flow

import React, {Component} from 'react'
import css from './Boards.css'
import {DropTarget} from 'react-dnd'

type Props = {
  selectBoard: Function,
  index: number,
  board: Object,
  isOver: Function,
  connectDropTarget: Function,
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

const boardTarget = {
  drop(props, monitor) {
    return {id: props.board.id}
  }
}

export class SingleBoard extends Component {
  props: Props

  render() {
    const {selectBoard, board, index, isOver, connectDropTarget} = this.props
    const style = isOver ? {backgroundColor: 'lightgreen'} : {}
    return connectDropTarget(
      <div>
        <button key={index} style={style} className={css.boardButton} onClick={() => selectBoard({index, boardId: board.id})}>{board.name}</button>
      </div>
    )
  }
}

export default DropTarget('note', boardTarget, collect)(SingleBoard)
