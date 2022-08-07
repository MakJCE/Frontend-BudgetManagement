import React, { useState } from 'react';
import Card from '../components/Card';
import mainStyles from '../mainStyles';
import Input from '../components/Input';
import authFetcher from '../fetchs/auth';
import {useNavigate} from 'react-router-dom'

const contentCardStyle = {
  ...mainStyles.centerBlock,
  flexDirection: 'column',
  gap: '30px'
};

const loginFields = [
  { name: 'username', type: 'text' },
  { name: 'password', type: 'password' }
];
const registerFields = [
  { name: 'username', type: 'text' },
  { name: 'password', type: 'password' },
  { name: 'confirm password', type: 'password' },
];

const LoginPage = () => {
  const [registerMode, setRegisterMode] = useState(false);
  const [values, setValues] = useState({});
  const nvigate = useNavigate();
  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const onSubmit = (event) => {
    console.table(values);
    event.preventDefault();
    if(!registerMode){
      authFetcher.login(values);
    }
    nvigate('/');
  };
  return (
    <div style={mainStyles.rootStyle}>
      <Card>
        <div >
          <form onSubmit={onSubmit} style={contentCardStyle}>
            {(registerMode? registerFields : loginFields).map((f, index) => {
              return (
                <Input
                  key={`lf-${index}`}
                  name={f.name}
                  value={values[f.name]||''}
                  label={f.name}
                  inputType={f.type}
                  onChange={onChange}
                />
              );
            })}
            <input type="submit" value={registerMode?"Register":"Login"} />
            {registerMode ?
              <nav style={{...mainStyles.linkStyle}} onClick={() => {setRegisterMode(false)}}>Login</nav> :
              <nav style={{...mainStyles.linkStyle}} onClick={() => {setRegisterMode(true)}}>Register</nav> 
            }
          </form>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
