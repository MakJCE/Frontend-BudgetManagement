import React from 'react'
import Logo from './Logo'

const navbarStyle={
  position: 'absolute',
  left: '20%',
  top:'10%'
}

const NavBar = () => {
  return (
    <div style={navbarStyle}>
      <Logo/>
    </div>
  )
}

export default NavBar