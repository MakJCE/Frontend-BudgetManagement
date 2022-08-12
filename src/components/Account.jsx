import React from 'react';
import mainStyles from '../mainStyles';
import BankAccountIcon from './jsxIcons/BankAccountIcon';

const containerStyle = {
  ...mainStyles.containerStyle,
  justifyContent: 'flex-start',
  padding: '10px',
  minWidth: '250px',
  gap:'10px'
};

const Account = ({ account }) => {
  return (
    <div style={containerStyle}>
      <BankAccountIcon />
      <div style={{lineHeight:'5px'}}>
        <p>{account.bankName}</p>
        <p>{account.accountType}</p>
      </div>
    </div>
  );
};

export default Account;
