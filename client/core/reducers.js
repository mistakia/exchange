import { combineReducers } from 'redux-immutable'

import { appReducer } from './app'
import { dialogReducer } from './dialog'

const rootReducer = (router) =>
  combineReducers({
    router,
    app: appReducer,
    dialog: dialogReducer
  })

export default rootReducer
