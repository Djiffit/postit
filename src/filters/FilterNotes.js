// @flow

import React, {Component} from 'react'

import css from './FilterNotes.css'
import Popup from '../popup/Popup'

type Props = {
  filterChange: Function,
}

export class FilterNotes extends Component {
  props: Props

  handleChange = (event) => this.props.filterChange(event.target.value)

  render() {
    return (
      <div className={css.floatingBox}>
        <label className={css.label}>Search:</label><input className={css.inputField} placeholder={'Search for a note'} onChange={this.handleChange} />
      </div>
    )
  }
}

export default FilterNotes
