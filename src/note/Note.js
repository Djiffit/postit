import React, {Component} from 'react'
import {DragSource} from 'react-dnd'
import css from './Notes.css'

const noteSource = {
  canDrag(props) {
    return true
  },

  isDragging(props, monitor) {
    return monitor.getItem().id === props.note.id
  },

  beginDrag(props, monitor, component) {
    const item = {id: props.note.id}
    return item
  },

  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return
    }
    const item = monitor.getItem()
    const dropResult = monitor.getDropResult()
    props.changeAction(props.note.id, dropResult.id)
  }
}

type Props = {
  index: number,
  deleteNote: Function,
  note: Object,
  showEditPopup: Function,
  doneNote: Function,
  connectDragSource: Function,
  changeAction: Function,
}

@DragSource('note', noteSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
export default class SingleNote extends Component {
  props: Props
  render() {
    const {isDragging, index, deleteNote, doneNote, showEditPopup, note, connectDragSource} = this.props
    const style = isDragging ? {backgroundColor: 'darkblue'} : {}
    return connectDragSource(
      <div className={css.row} style={style}>
        <div key={index} className={css.pullRight}>
          <button key={index + 'd'} onClick={() => deleteNote(note.id)} className={css.inlineBtn}>Delete</button>
          <button key={index + 'e'} onClick={() => showEditPopup(note.id)} className={css.inlineBtn}>Edit</button>
        </div>
        <h3 className={note.done ? css.done : css.notdone}
          onClick={() => doneNote({done: note.done ? 'undone' : 'done', noteId: note.id})}>
          <p className={css.overflow} key={index}>{note.message}</p>
        </h3>
      </div>
    )
  }
}
