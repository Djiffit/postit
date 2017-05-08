// @flow

import React, {Component} from 'react'
import {connect} from 'react-redux'

import {deleteBoard, editBoard} from './actions'
import {getBoard} from './selectors'
import css from './Board.css'
import Popup from '../popup/Popup'

import type {RootState} from '$src/root/types'

type Props = {
  boardName: string,
  boardId: number,
  deleteBoard: Function,
  editBoard: Function,
}


export class Board extends Component {
  state = {isShowing: false}
  props: Props

  cancelAction = () => this.setState({isShowing: false})

  editAction = (data) => {
    this.props.editBoard({name: data.name, boardId: this.props.boardId})
    this.setState({isShowing: false})
  }

  render() {
    const popup = this.state.isShowing ? <Popup cancelAction={this.cancelAction.bind(this)}
      editAction={this.editAction.bind(this)}/> : null
      const {deleteBoard, editBoard, boardName, boardId} = this.props
      return (
        <div>
          <div className={css.topPart}>
            <h3 className={css.topContent}>{boardName}</h3>
            <button onClick={() => this.setState({isShowing: true})} className={css.topContentButton}>Edit</button>
            <button onClick={() => deleteBoard(boardId)} className={css.topContentButton}>Delete</button>
          </div>
          {popup}
        </div>
      )
    }
  }

  const mapStateToProps = (state: RootState) => (getBoard(state))

  export default connect(mapStateToProps, {deleteBoard, editBoard})(Board)
