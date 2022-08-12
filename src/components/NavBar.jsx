import React, { useEffect } from 'react';
import Logo from './Logo';
import authFetcher from '../fetchs/auth';
import mainStyles from '../mainStyles.jsx';
import { useNavigate, useLocation } from 'react-router-dom';
import NavElement from './NavElement';
import useWindowSize from '../useWindowHook';
//redux
import { useSelector } from 'react-redux';
//icons
import DashboardIcon from './jsxIcons/DashboardIcon';
import TransferIcon from './jsxIcons/TransferIcon';
import LogoutIcon from './jsxIcons/LogoutIcon';
import AccountIcon from './jsxIcons/AccountsIcon';

const navbarStyle = {
  position: 'absolute',
  left: '20%',
  top: '10%'
};
const navbarResponsive = {
  position: 'absolute',
  left: '10px',
  top: '10%'
};
const tagsStyle = {
  ...mainStyles.centerBlock,
  flexDirection: 'column',
  gap: '20px',
  marginTop: '40px'
};
const tagsResponsive = {
  ...tagsStyle,
  flexDirection: 'row',
  display: 'inline'
};
const userAccountStyle={
  ...mainStyles.centerBlock,
  flexDirection: 'column',
}

const tags = [
  { label: 'Dashboard', icon: DashboardIcon, url: '/' },
  { label: 'Transfers', icon: TransferIcon, url: '/transfers' }
];

const NavBar = () => {
  const navigate = useNavigate();
  const username = useSelector((state)=> state.sessionData.username)
  const location = useLocation().pathname;
  const windowSize = useWindowSize();
  useEffect(() => {
    if (!authFetcher.verifyLoggedIn() && location !== '/login') {
      navigate('/login');
    }
  }, [navigate, location]);
  return (
    <div style={windowSize.width < 1200 ? navbarResponsive : navbarStyle}>
      <Logo />
      <div
        style={{
          ...(windowSize.width < 840 ? tagsResponsive : tagsStyle),
          display: location === '/login' ? 'none' : 'flex'
        }}
      >
        <div style={userAccountStyle}>
          <AccountIcon />
          {username}
        </div>
        {tags.map((tag, index) => {
          return (
            <NavElement
              key={`tg-${index}`}
              label={tag.label}
              Icon={tag.icon}
              isSelected={location === tag.url}
              onClick={() => navigate(tag.url)}
            />
          );
        })}
        <NavElement
          key={`tg-logoutbtn`}
          label={'Logout'}
          Icon={LogoutIcon}
          isSelected={location === '/login'}
          onClick={() => {
            authFetcher.logout();
            navigate('/login');
          }}
        />
      </div>
    </div>
  );
};

export default NavBar;
