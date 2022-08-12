import React, { useEffect } from 'react';
import Account from './Account';
import mainStyles from '../mainStyles';
import AddBankAccount from './AddBankAccount'
//reduxjs
import { useSelector, useDispatch } from 'react-redux';
import { setBankAccounts } from '../slicers/bankAccountSlice';

const listStyle = {
  ...mainStyles.centerBlock,
  flexWrap: 'wrap',
  gap: '10px'
};

const _accounts = [
  { id: 1, bankName: 'Banco Bisa', accountType: 'Credit Card' },
  { id: 2, bankName: 'Banco Bisa', accountType: 'Credit Card' },
  { id: 3, bankName: 'Banco Bisa', accountType: 'Credit Card' }
];

const AccountsList = () => {
  const dispatch = useDispatch();
  const accounts = useSelector((state)=> state.bankAccounts.accounts)
  useEffect(() => {
    dispatch(setBankAccounts(_accounts));
  }, [dispatch]);

  return (
    <div style={listStyle}>
      {accounts.map((account, index) => {
        return <Account key={index} account={account} />;
      })}
      <AddBankAccount/>
    </div>
  );
};

export default AccountsList;
