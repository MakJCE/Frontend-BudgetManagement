import React from 'react';
import logo from '../assests/logo.png';

const logoStyle = {
    width: '182px',
    height: '69px',
}

const Logo = () => {
  return (
    <div >
      <img src={logo} alt="logo" style={logoStyle}/>
    </div>
  );
};

export default Logo;
