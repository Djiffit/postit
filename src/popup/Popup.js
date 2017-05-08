// @flow
import React, {Component} from 'react'
import EditForm from '../form/EditForm'
import css from './Popup.css'

type Props = {
  message: string,
  callBack: Function,
  cancelAction: Function,
  editAction: Function,
}

const backdropStyle = {
  position: 'fixed',
  zIndex: '1',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,0.3)',
  padding: 50,
}

class Popup extends React.Component {
  props: Props

  doEdit = (data) => {
    this.props.editAction(data)
  }

  render() {
    return (
      <div className={css.backDrop} style={backdropStyle}>
        <div className={css.formContainer}>
          <EditForm submitForm={this.doEdit.bind(this)} cancelAction={this.props.cancelAction} onSubmit={this.doEdit.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default Popup
