// @flow

import {combineReducers} from 'redux'
import boardReducer from '../board/reducer'

import type {Reducer} from '../types'
import type {RootState} from './types'

export default (): Reducer<RootState> =>
  combineReducers({
    board: boardReducer,
  })
