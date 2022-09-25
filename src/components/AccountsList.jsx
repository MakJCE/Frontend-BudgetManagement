import React from 'react';
import Account from './Account';
import mainStyles from '../mainStyles';
import AddBankAccount from './AddBankAccount';
//reduxjs
import { useSelector } from 'react-redux';

const listStyle = {
  ...mainStyles.centerBlock,
  flexWrap: 'wrap',
  gap: '10px'
};

const AccountsList = () => {
  const accounts = useSelector((state) => state.bankAccounts.accounts);
  
  return (
    <div style={listStyle}>
      {accounts.map((account, index) => {
        return <Account key={index} account={account} />;
      })}
      <AddBankAccount />
    </div>
  );
};

export default AccountsList;
