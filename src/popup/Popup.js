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

class Popup extends React.Component {
  props: Props

  doEdit = (data) => {
    this.props.editAction(data)
  }

  render() {
    return (
      <div className={css.backdrop}>
        <div onBlur={() => console.log('dw')} className={css.formContainer}>
          <EditForm submitForm={this.doEdit.bind(this)} cancelAction={this.props.cancelAction} onSubmit={this.doEdit.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default Popup
