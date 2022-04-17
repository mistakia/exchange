import React from 'react'
import PropTypes from 'prop-types'
// import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

// import './balances.styl'

export default class BalancesPage extends React.Component {
  render() {
    const { isLoaded } = this.props
    return (
      <Container maxWidth='md' className='home__container'>
        <p>App Loaded: {isLoaded.toString()}</p>
        <p>Page: Balances</p>
      </Container>
    )
  }
}

BalancesPage.propTypes = {
  isLoaded: PropTypes.bool
}
