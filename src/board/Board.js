// @flow

import React, {Component} from 'react'
import {connect} from 'react-redux'

import {deleteBoard, showBoardEdit, hideBoardEdit, editBoard} from './actions'
import {getBoard} from './selectors'
import {changeNoteFilter} from '../note/actions'
import FilterNotes from '../filters/FilterNotes'
import css from './Board.css'
import Popup from '../popup/Popup'

import type {RootState} from '$src/root/types'

type Props = {
  boardName: string,
  boardId: number,
  deleteBoard: Function,
  editBoard: Function,
  showBoardEdit: Function,
  hideBoardEdit: Function,
  boardShowing: boolean,
  changeNoteFilter: Function,
}


export class Board extends Component {
  props: Props

  cancelAction = () => this.props.hideBoardEdit()

  editAction = (data) => this.props.editBoard({name: data.name, boardId: this.props.boardId})

  render() {
    const {deleteBoard, changeNoteFilter, boardShowing, showBoardEdit, editBoard, boardName, boardId} = this.props
    const popup = boardShowing ? <Popup cancelAction={this.cancelAction.bind(this)} editAction={this.editAction.bind(this)}/> : <FilterNotes filterChange={changeNoteFilter}/>
    return (
      <div>
        <div className={css.topPart}>
          <h3 className={css.topContent}>{boardName}</h3>
          <button onClick={() => showBoardEdit()} className={css.topContentButton}>Edit</button>
          <button onClick={() => deleteBoard(boardId)} className={css.topContentButton}>Delete</button>
        </div>
        {popup}
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => (getBoard(state))

export default connect(mapStateToProps, {deleteBoard, changeNoteFilter, editBoard, showBoardEdit, hideBoardEdit})(Board)
