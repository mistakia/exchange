import { combineReducers } from 'redux-immutable'

import { appReducer } from './app'
import { authReducer } from './auth'
import { dialogReducer } from './dialog'

const rootReducer = (router) =>
  combineReducers({
    router,
    app: appReducer,
    auth: authReducer,
    dialog: dialogReducer
  })

export default rootReducer
