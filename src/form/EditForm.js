import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import {minLength, maxLength, required} from './Validations'
import css from './EditForm.css'

const minLength3 = minLength(5)
const maxLength15 = maxLength(15)

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <div>
      <div className={css.header}>
        <h3 className={css.htext}>Please enter the new value:</h3>
      </div>
      <input className={css.inputField} {...input} placeholder={label} type={type}/>
      {touched && ((error && <span className={css.warning}>{error}</span>) || (warning && <span className={css.warning}>{warning}</span>))}
    </div>
  </div>
)

class EditForm extends Component {

  render() {
    const {handleSubmit, reset, submitForm, cancelAction} = this.props
    return (
      <div>
        <form onSubmit={handleSubmit(submitForm.bind(this))}>
          <div>
            <Field className={css.inputField} name="name" type="text"
              component={renderField} label="New value"
              validate={[required, maxLength15, minLength3 ]}
            />
          </div>
          <button className={css.createButton} type="submit">Update</button>
        </form>
        <button onClick={cancelAction} className={css.cancelButton} type="submit">Cancel</button>
      </div>
    )
  }
}

EditForm = reduxForm({
  form: 'edit'
})(EditForm)

export default EditForm
