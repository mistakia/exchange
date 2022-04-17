import React from 'react'
import PropTypes from 'prop-types'
// import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

// import './signin.styl'

export default class SigninPage extends React.Component {
  render() {
    const { isLoaded } = this.props
    return (
      <Container maxWidth='md' className='home__container'>
        <p>App Loaded: {isLoaded.toString()}</p>
        <p>Page: Signin</p>
      </Container>
    )
  }
}

SigninPage.propTypes = {
  isLoaded: PropTypes.bool
}
