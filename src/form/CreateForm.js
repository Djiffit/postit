import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import {minLength, maxLength, required, renderField} from './Validations'
import css from './CreateForm.css'

const minLength3 = minLength(5)
const maxLength15 = maxLength(15)

class CreateForm extends Component {

  render() {

    const {handleSubmit, reset, submitForm} = this.props
    return (
      <form onSubmit={handleSubmit(submitForm.bind(this))}>
        <div>
          <Field className={css.inputField} name="name" type="text"
            component={renderField} label="Board name"
            validate={[required, maxLength15, minLength3 ]}
          />
        </div>
        <button className={css.createButton} type="submit">Create</button>
      </form>
    )
  }
}

CreateForm = reduxForm({
  form: 'create'
})(CreateForm)

export default CreateForm
