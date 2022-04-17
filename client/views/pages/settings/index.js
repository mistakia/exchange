import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { getApp } from '@core/app'

import SettingsPage from './settings'

const mapStateToProps = createSelector(getApp, (app) => ({
  isLoaded: app.isLoaded
}))

export default connect(mapStateToProps)(SettingsPage)
