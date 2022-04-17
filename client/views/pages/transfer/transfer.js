import React from 'react'
import PropTypes from 'prop-types'
// import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

// import './transfer.styl'

export default class TransferPage extends React.Component {
  render() {
    const { isLoaded } = this.props
    return (
      <Container maxWidth='md' className='home__container'>
        <p>App Loaded: {isLoaded.toString()}</p>
        <p>Page: Transfer</p>
      </Container>
    )
  }
}

TransferPage.propTypes = {
  isLoaded: PropTypes.bool
}
