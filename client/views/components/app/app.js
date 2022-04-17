import React from 'react'
import PropTypes from 'prop-types'
import { Routes, Route } from 'react-router-dom'
import LinearProgress from '@mui/material/LinearProgress'
import Box from '@mui/material/Box'

import Dialog from '@components/dialog'
import HomePage from '@pages/home'
import BalancesPage from '@pages/balances'
import TransferPage from '@pages/transfer'
import TradePage from '@pages/trade'
import SettingsPage from '@pages/settings'
import OrdersPage from '@pages/orders'
import SignupPage from '@pages/signup'
import SigninPage from '@pages/signin'

import '@styles/normalize.css'
import '@styles/typography.styl'

import './app.styl'

export default class App extends React.Component {
  async componentDidMount() {
    this.props.load()
  }

  render() {
    const { isLoaded } = this.props
    if (!isLoaded) {
      return (
        <div className='load__container'>
          <Box sx={{ width: '100px', paddingTop: '2em' }}>
            <LinearProgress color='inherit' />
          </Box>
        </div>
      )
    }

    return (
      <>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/signin' element={<SigninPage />} />
          <Route path='/settings' element={<SettingsPage />} />
          <Route path='/balances' element={<BalancesPage />} />
          {/* could be called wallet page */}
          <Route path='/transfer' element={<TransferPage />} />
          <Route path='/trade' element={<TradePage />} />
          {/* sub pages: swap & advanced */}
          <Route path='/orders' element={<OrdersPage />} />
        </Routes>
        <Dialog />
      </>
    )
  }
}

App.propTypes = {
  load: PropTypes.func,
  isLoaded: PropTypes.bool
}
