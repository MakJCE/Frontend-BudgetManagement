import React, { useEffect } from 'react';
import Logo from './Logo';
import authFetcher from '../fetchs/auth';
import mainStyles from '../mainStyles.jsx';
import { useNavigate, useLocation } from 'react-router-dom';
import NavElement from './NavElement';
//icons
import DashboardIcon from './jsxIcons/DashboardIcon';
import AccountsIcon from './jsxIcons/AccountsIcon';
import TransferIcon from './jsxIcons/TransferIcon';
import LogoutIcon from './jsxIcons/LogoutIcon';

const navbarStyle = {
  position: 'absolute',
  left: '20%',
  top: '10%'
};

const tagsStyle = {
  ...mainStyles.centerBlock,
  flexDirection: 'column',
  gap: '20px',
  marginTop: '40px'
};

const tags = [
  { label: 'Dashboard', icon: DashboardIcon, url: '/' },
  { label: 'Accounts', icon: AccountsIcon, url: '/accounts' },
  { label: 'Transfers', icon: TransferIcon, url: '/transfers' }
];

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  useEffect(() => {
    if (!authFetcher.verifyLoggedIn() && location !== '/login') {
      navigate('/login');
    }
  }, [navigate, location]);
  return (
    <div style={navbarStyle}>
      <Logo />
      <div
        style={{
          ...tagsStyle,
          display: location === '/login' ? 'none' : 'flex'
        }}
      >
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
