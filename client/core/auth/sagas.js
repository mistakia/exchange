import { call, takeLatest, fork } from 'redux-saga/effects'

import { postSignin, postSignup } from '@core/api'
import { authActions } from './actions'

export function* signin({ payload }) {
  yield call(postSignin, payload)
}

export function* signup({ payload }) {
  yield call(postSignup, payload)
}

//= ====================================
//  WATCHERS
// -------------------------------------

export function* watchSignup() {
  yield takeLatest(authActions.SIGNIN, signin)
}

export function* watchSignin() {
  yield takeLatest(authActions.SIGNUP, signup)
}

//= ====================================
//  ROOT
// -------------------------------------

export const authSagas = [fork(watchSignin), fork(watchSignup)]
