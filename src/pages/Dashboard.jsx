import React, { useEffect } from 'react';
import mainStyles from '../mainStyles';
import AccountsList from '../components/AccountsList';
import useWindowSize from '../useWindowHook';
import AddExpenseIncome from '../components/AddExpenseIncome';
import generalFetcher from '../fetchs/general';
import bankAccountFetcher from '../fetchs/bankAccount';
//Cookies
import { useCookies } from 'react-cookie';
//redux
import { useDispatch } from 'react-redux';
import { setBadges } from '../slicers/badgeSlice';
import { setCategories } from '../slicers/categorySlice';
import { setBankAccounts } from '../slicers/bankAccountSlice';

const subtitleStyle = {
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '24px',
  lineHeight: '10px'
};

const Dashboard = () => {
  const [cookies] = useCookies(['token']);
  const windowSize = useWindowSize();
  const dispatch = useDispatch();
  const rootStyle = {
    ...mainStyles.rootStyle,
    marginTop:
      windowSize.width < 600 ? '60%' : windowSize.width < 840 ? '35%' : '10%'
  };
  useEffect(() => {
    generalFetcher.getBadges(cookies.token).then((badges) => {
      dispatch(setBadges(badges));
    });
    generalFetcher.getCategories(cookies.token).then((categories) => {
      dispatch(setCategories(categories));
    });
    bankAccountFetcher.getAllAccounts(cookies.token).then((accounts) => {
      dispatch(setBankAccounts(accounts));
    });
  }, [cookies, dispatch]);
  return (
    <div style={rootStyle}>
      <div style={mainStyles.pageContainerStyle}>
        <p style={mainStyles.titleStyle}>Dashboard</p>
        <p style={subtitleStyle}>Bank Accounts</p>
        <AccountsList />
        <p style={subtitleStyle}>Expenses & Incomes</p>
        <AddExpenseIncome />
      </div>
    </div>
  );
};

export default Dashboard;
