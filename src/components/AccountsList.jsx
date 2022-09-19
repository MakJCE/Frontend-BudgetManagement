import React, { useEffect } from 'react';
import Account from './Account';
import mainStyles from '../mainStyles';
import AddBankAccount from './AddBankAccount';
import bankAccountFetcher from '../fetchs/bankAccount';
//Cookies
import { useCookies } from 'react-cookie';
//reduxjs
import { useSelector, useDispatch } from 'react-redux';
import { setBankAccounts } from '../slicers/bankAccountSlice';

const listStyle = {
  ...mainStyles.centerBlock,
  flexWrap: 'wrap',
  gap: '10px'
};

const AccountsList = () => {
  const dispatch = useDispatch();
  const [cookies] = useCookies(['token']);
  const accounts = useSelector((state) => state.bankAccounts.accounts);
  useEffect(() => {
    bankAccountFetcher.getAllAccounts(cookies.token).then((_accounts) => {
      dispatch(setBankAccounts(_accounts));
    });
  }, [dispatch, cookies.token]);

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
