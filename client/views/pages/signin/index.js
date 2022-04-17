import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { getApp } from '@core/app'

import SigninPage from './signin'

const mapStateToProps = createSelector(getApp, (app) => ({
  isLoaded: app.isLoaded
}))

export default connect(mapStateToProps)(SigninPage)
