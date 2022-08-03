import React, {useEffect} from 'react';
import Logo from './Logo';
import authFetcher from '../fetchs/auth';
import {useNavigate, useLocation} from 'react-router-dom'

const navbarStyle = {
  position: 'absolute',
  left: '20%',
  top: '10%'
};

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  useEffect(() => {
    if(!authFetcher.verifyLoggedIn() && location!=='/login'){
      navigate('/login');
    }
  }, [navigate, location]);
  return (
    <div style={{display:'block'}}>
      <div style={navbarStyle}>
        <Logo />
      </div>
    </div>
  );
};

export default NavBar;
