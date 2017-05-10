// @flow

import React, {Component} from 'react'

import Boards from '../board/Boards'
import Notes from '../note/Notes'
import Board from '../board/Board'
import css from './Body.css'
import HTML5Backend from 'react-dnd-html5-backend'
import {DragDropContext} from 'react-dnd'

class Body extends Component {
  render() {
    return (
      <div className={css.component}>
        <div className={css.leftBar}>
          <Boards />
        </div>
        <div className= {css.rightBar}>
          <Board />
          <div className={css.notes}>
            <Notes />
          </div>
        </div>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(Body)
