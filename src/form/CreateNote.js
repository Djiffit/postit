import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import {minLength, maxLength, required} from './Validations'
import css from './CreateNote.css'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div style={{position:'fixed'}}>
    <div>
      <input className={css.inputField} {...input} placeholder={label} type={type}/>
      {touched && ((error && <span className={css.warning}>{error}</span>) || (warning && <span className={css.warning}>{warning}</span>))}
    </div>
  </div>
)
const minLength5 = minLength(5)
const maxLength50 = maxLength(50)

class CreateNote extends Component {
  render() {
    const {handleSubmit, cancelAction, reset, submitForm} = this.props
    return (
      <div className={css.formWrapper}>
        <form onSubmit= {handleSubmit(submitForm.bind(this))}>
          <div>
            <Field name="message" type="text"
              component={renderField} label="Note message"
              validate={[required, maxLength50, minLength5 ]}
            />
          </div>
          <button className={css.createButton} type="submit">Create a Note</button>
        </form>
      </div>
    )
  }
}

CreateNote = reduxForm({
  form: 'createNote'
})(CreateNote)

export default CreateNote
