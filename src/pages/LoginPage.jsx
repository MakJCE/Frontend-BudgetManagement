import React, { useState } from 'react';
import Card from '../components/Card';
import mainStyles from '../mainStyles';
import Form from '../components/Form/Form';
import {
  loginFields,
  registerFields
} from '../components/formsFields/authFields';
import authFetcher from '../fetchs/auth';
import { useNavigate } from 'react-router-dom';
// Cookies
import { useCookies } from 'react-cookie';
//reduxjs
import { useDispatch } from 'react-redux';
import { setSessionData } from '../slicers/sessionDataSlice';

const contentCardStyle = {
  ...mainStyles.centerBlock,
  flexDirection: 'column',
  gap: '30px'
};

const LoginPage = () => {
  const [, setCookie] = useCookies(['token']);
  const dispatch = useDispatch();
  const [registerMode, setRegisterMode] = useState(false);
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    if (!registerMode) {
      authFetcher
        .login(values, setCookie, (data) => {
          dispatch(setSessionData(data));
        })
        .then(() => {
          navigate('/');
        })
        .catch(() => {
          alert('Username or Password incorrect.');
        });
    } else {
      authFetcher
        .register(values)
        .then(() => {
          alert('User registered successfully.');
          window.location.reload();
        })
        .catch(() => {
          alert('Something went wrong.');
        });
    }
  };
  return (
    <div style={mainStyles.rootStyle}>
      <Card>
        <div style={contentCardStyle}>
          <Form
            fields={registerMode ? registerFields : loginFields}
            handleOnSubmit={onSubmit}
            submitButtonLabel={registerMode ? 'Register' : 'Login'}
          />
          {registerMode ? (
            <nav
              style={{ ...mainStyles.linkStyle }}
              onClick={() => {
                setRegisterMode(false);
              }}
            >
              Login
            </nav>
          ) : (
            <nav
              style={{ ...mainStyles.linkStyle }}
              onClick={() => {
                setRegisterMode(true);
              }}
            >
              Not have account? Register
            </nav>
          )}
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
