export const authActions = {
  SIGNIN: 'SIGNIN',
  SIGNUP: 'SIGNUP',
  SIGNOUT: 'SIGNOUT',

  POST_SIGNUP_PENDING: 'POST_SIGNUP_PENDING',
  POST_SIGNUP_FAILED: 'POST_SIGNUP_FAILED',
  POST_SIGNUP_FULFILLED: 'POST_SIGNUP_FULFILLED',

  POST_SIGNIN_PENDING: 'POST_SIGNIN_PENDING',
  POST_SIGNIN_FAILED: 'POST_SIGNIN_FAILED',
  POST_SIGNIN_FULFILLED: 'POST_SIGNIN_FULFILLED',

  signin: ({ email, phone, password }) => ({
    type: authActions.SIGNIN,
    payload: {
      email,
      phone,
      password
    }
  }),

  signout: () => ({
    type: authActions.SIGNOUT
  }),

  signup: ({ email, phone, password }) => ({
    type: authActions.SIGNUP,
    payload: {
      email,
      phone,
      password
    }
  }),

  postSigninPending: (opts) => ({
    type: authActions.POST_SIGNIN_PENDING,
    payload: {
      opts
    }
  }),

  postSigninFailed: (opts, error) => ({
    type: authActions.POST_SIGNIN_FAILED,
    payload: {
      opts,
      error
    }
  }),

  postSigninFulfilled: (opts, data) => ({
    type: authActions.POST_SIGNIN_FULFILLED,
    payload: {
      opts,
      data
    }
  }),

  postSignupPending: (opts) => ({
    type: authActions.POST_SIGNUP_PENDING,
    payload: {
      opts
    }
  }),

  postSignupFulfilled: (opts, data) => ({
    type: authActions.POST_SIGNUP_FULFILLED,
    payload: {
      opts,
      data
    }
  })
}

export const postSigninRequestActions = {
  pending: authActions.postSigninPending,
  failed: authActions.postSigninFailed,
  fulfilled: authActions.postSigninFulfilled
}

export const postSignupRequestActions = {
  pending: authActions.postSignupPending,
  failed: authActions.postSignupFailed,
  fulfilled: authActions.postSignupFulfilled
}
