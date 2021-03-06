// @flow

import {combineReducers} from 'redux'
import boardReducer from '../board/reducer'
import {reducer as formReducer} from 'redux-form'

import type {Reducer} from '../types'
import type {RootState} from './types'

export default (): Reducer<RootState> =>
  combineReducers({
    board: boardReducer,
    form: formReducer
  })
