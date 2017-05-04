// @flow

import {fork} from 'redux-saga/effects'
import boardSaga from '../board/saga'
import noteSaga from '../note/saga'

export default () =>
  // $FlowFixMe
  function* rootSaga() {
    yield [
      fork(boardSaga),
      fork(noteSaga),
    ]
  }
