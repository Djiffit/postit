// @flow

import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Body from '../body/Body'

export default
  <Route path="/">
    <IndexRoute component={Body}/>
  </Route>
