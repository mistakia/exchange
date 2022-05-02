import React from 'react'
import PropTypes from 'prop-types'
import { NavLink, useLocation } from 'react-router-dom'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

import './menu.styl'

const MenuWrapper = (Component) => {
  return function WrappedComponent(props) {
    const location = useLocation()
    return <Component location={location} />
  }
}

const MenuContainer = ({ children }) => (
  <div className='menu__container'>
    <div className='menu__content'>
      <div className='menu__lead'>
        <Button variant='text' component={NavLink} to='/'>
          Home
        </Button>
      </div>
      {Boolean(children) && <div className='menu__nav'>{children}</div>}
      <div className='menu__auth'>
        <Stack spacing={2} direction='row'>
          <Button variant='text' component={NavLink} to='/signin'>
            Signin
          </Button>
          <Button variant='contained' component={NavLink} to='/signup'>
            Signup
          </Button>
        </Stack>
      </div>
    </div>
  </div>
)

MenuContainer.propTypes = {
  children: PropTypes.element
}

class Menu extends React.Component {
  render() {
    const { location } = this.props
    const { pathname } = location

    if (pathname === '/signin' || pathname === '/signup') {
      return <MenuContainer />
    }

    return (
      <MenuContainer>
        <Button variant='text' component={NavLink} to='/trade'>
          Trade
        </Button>
      </MenuContainer>
    )
  }
}

Menu.propTypes = {
  location: PropTypes.object
}

export default MenuWrapper(Menu)
