// @flow

import React, {Component} from 'react'

import css from './FilterElements.css'
import Popup from '../popup/Popup'

type Props = {
  filterChange: Function,
}

export class FilterElements extends Component {
  props: Props

  handleChange= (event) => this.props.filterChange(event.target.value)

  render() {
    return (
      <div className={css.floatingBox}>
        <label className={css.label}>Filter:</label><input className={css.inputField} placeholder={'Search for a board'} onChange={this.handleChange} />
      </div>
    )
  }
}

export default FilterElements
