// @flow

import React, {Component} from 'react'
import {connect} from 'react-redux'

import {fetchBoards, createBoard, selectBoard} from './actions'
import {getBoards} from './selectors'
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

  state = {newBoard: ''}

  componentWillMount() {
    this.props.fetchBoards()
  }

  handleChange = (event) => {
    this.setState({newBoard: event.target.value})
  }

  render() {
    const {createBoard, selectBoard} = this.props
    return (
      <div>
        <input placeholder='Name' type='text' onChange={this.handleChange} className={css.inputField}></input>
        <button className={css.createButton}
          onClick={() => createBoard(this.state.newBoard)}>
          Create Board
        </button>
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
