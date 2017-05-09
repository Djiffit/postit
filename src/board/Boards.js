// @flow

import React, {Component} from 'react'
import {connect} from 'react-redux'

import {fetchBoards, changeBoardFilter, createBoard, selectBoard} from './actions'
import {getBoards} from './selectors'
import CreateForm from '../form/CreateForm'
import FilterElements from '../filters/FilterElements'
import css from './Boards.css'

import type {RootState} from '$src/root/types'
import type {Board} from './types'

type Props = {
  boards: Array<Board>,
  fetchBoards: Function,
  createBoard: Function,
  selectBoard: Function,
  changeBoardFilter: Function,
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
    const {createBoard, selectBoard, changeBoardFilter} = this.props
    return (
      <div>
        <div className={css.inputField}>
          <CreateForm submitForm={this.submitBoard.bind(this)} onSubmit={this.submitBoard.bind(this)}/>
        </div>
        <FilterElements filterChange={changeBoardFilter}/>
        <div className={css.boardList}>
        {
          this.props.boards.map((board, index) =>
          <button key={index} className={css.boardButton} onClick={() => selectBoard({index, boardId: board.id})}>{board.name}</button>)
        }
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  boards: getBoards(state),
})

export default connect(mapStateToProps, {selectBoard, changeBoardFilter, fetchBoards, createBoard})(Boards)
