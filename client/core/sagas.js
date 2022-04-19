import { all } from 'redux-saga/effects'

import { appSagas } from './app'
import { authSagas } from './auth'
import { websocketSagas } from './websocket'

export default function* rootSage() {
  yield all([...appSagas, ...authSagas, ...websocketSagas])
}
