import { Record } from 'immutable'

import { authActions } from './actions'

const initialState = new Record({
  isPending: false,
  isAuthenticated: false,
  token: null
})

export function authReducer(state = initialState(), { payload, type }) {
  switch (type) {
    case authActions.POST_SIGNIN_PENDING:
    case authActions.POST_SIGNUP_PENDING:
      return state.merge({ isPending: true })

    case authActions.POST_SIGNIN_FAILED:
    case authActions.POST_SIGNUP_FAILED:
      return state.merge({ isPending: false })

    case authActions.POST_SIGNIN_FULFILLED:
    case authActions.POST_SIGNUP_FULFILLED:
      return state.merge({
        isPending: false,
        isAuthenticated: false,
        token: payload.data.token
      })

    default:
      return state
  }
}
