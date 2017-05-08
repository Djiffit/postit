// @flow

import React, {Component} from 'react'
import {connect} from 'react-redux'

import {fetchBoards, createBoard, selectBoard} from './actions'
import {getBoards} from './selectors'
import CreateForm from '../form/CreateForm'
import css from './Boards.css'

import type {RootState} from '$src/root/types'
import type {Board} from './types'

type Props = {
  boards: Array<Board>,
  fetchBoards: Function,
  createBoard: Function,
  selectBoard: Function,
}

export class Boards extends Component {
  props: Props

  componentWillMount() {
    this.props.fetchBoards()
  }

  submitBoard (data: Object) {
    this.props.createBoard(data.name)
  }

  render() {
    const {createBoard, selectBoard} = this.props
    return (
      <div>
      <div className={css.inputField}>
        <CreateForm submitForm={this.submitBoard.bind(this)} onSubmit={this.submitBoard.bind(this)}/>
      </div>
      {
        this.props.boards.map((board, index) =>
        <button className={css.boardButton} onClick={() => selectBoard({index, boardId: board.id})}>{board.name}</button>)
      }
    </div>
  )
}
}

const mapStateToProps = (state: RootState) => ({
  boards: getBoards(state),
})

export default connect(mapStateToProps, {selectBoard, fetchBoards, createBoard})(Boards)
