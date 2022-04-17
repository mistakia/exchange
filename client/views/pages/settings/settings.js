import React from 'react'
import PropTypes from 'prop-types'
// import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

// import './settings.styl'

export default class SettingsPage extends React.Component {
  render() {
    const { isLoaded } = this.props
    return (
      <Container maxWidth='md' className='home__container'>
        <p>App Loaded: {isLoaded.toString()}</p>
        <p>Page: Settings</p>
      </Container>
    )
  }
}

SettingsPage.propTypes = {
  isLoaded: PropTypes.bool
}
