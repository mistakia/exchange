import { all } from 'redux-saga/effects'

import { appSagas } from './app'
import { websocketSagas } from './websocket'

export default function* rootSage() {
  yield all([...appSagas, ...websocketSagas])
}
