import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import css from './CreateForm.css'

export const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <div>
      <input className={css.inputField} {...input} placeholder={label} type={type}/>
      {touched && ((error && <span className={css.warning}>{error}</span>) || (warning && <span className={css.warning}>{warning}</span>))}
    </div>
  </div>
)
export const minLength = min => value => value && value.length < min && `⚠ Must be longer than ${ min }` || undefined
export const required = value => value ? undefined : '⚠ Required'
export const maxLength = max => value =>
value && value.length > max ? `⚠ Must be ${max} characters or less` : undefined
