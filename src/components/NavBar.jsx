import React, { useEffect } from 'react';
import Logo from './Logo';
import authFetcher from '../fetchs/auth';
import mainStyles from '../mainStyles.jsx';
import { useNavigate, useLocation } from 'react-router-dom';
import NavElement from './NavElement';
import useWindowSize from '../useWindowHook';
//Cookies
import { useCookies } from 'react-cookie';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { setSessionData } from '../slicers/sessionDataSlice';
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
const userAccountStyle = {
  ...mainStyles.centerBlock,
  flexDirection: 'column'
};

const tags = [
  { label: 'Dashboard', icon: DashboardIcon, url: '/' },
  { label: 'Expenses & Incomes', icon: TransferIcon, url: '/history' }
];

const NavBar = ({ body }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const person = useSelector((state) => state.sessionData.person);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const windowSize = useWindowSize();
  const location = useLocation().pathname;
  useEffect(() => {
    if (!authFetcher.verifyLoggedIn(cookies) && location !== '/login') {
      navigate('/login');
    } else {
      if (location !== '/login') {
        authFetcher.getUserData(cookies.token).then((userData) => {
          dispatch(setSessionData({ person: userData }));
        });
      }
    }
  }, [navigate, location, cookies, dispatch]);
  return (
    <>
      <div style={windowSize.width < 1200 ? navbarResponsive : navbarStyle}>
        <Logo />
        <div
          style={{
            ...(windowSize.width < 840 ? tagsResponsive : tagsStyle),
            display: location === '/login' ? 'none' : 'flex'
          }}
        >
          <div style={userAccountStyle}>
            <AccountIcon color={'#5544F2'} />
            {person?.username}
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
              authFetcher.logout(removeCookie, setCookie);
              navigate('/login');
            }}
          />
        </div>
      </div>
      {body}
    </>
  );
};

export default NavBar;
