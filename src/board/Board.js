// @flow

import React, {Component} from 'react'
import {connect} from 'react-redux'

import {deleteBoard, editBoard} from './actions'
import {getBoard} from './selectors'
import css from './Board.css'

import type {RootState} from '$src/root/types'

type Props = {
  boardName: string,
  boardId: number,
  deleteBoard: Function,
  editBoard: Function,
}

export class Board extends Component {
  props: Props
  render() {
    const {deleteBoard, editBoard, boardName, boardId} = this.props
    return (
      <div className={css.topPart}>
        <h3 className={css.topContent}>{boardName}</h3>
        <button onClick={() => editBoard({name: prompt('Enter new name'), boardId})} className={css.topContentButton}>Edit</button>
        <button onClick={() => deleteBoard(boardId)} className={css.topContentButton}>Delete</button>
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => (getBoard(state))

export default connect(mapStateToProps, {deleteBoard, editBoard})(Board)
