import React, { useState, useEffect } from 'react';
import mainStyles from '../mainStyles';
import useWindowSize from '../useWindowHook';
import bankAccountFetcher from '../fetchs/bankAccount';
import movementFetcher from '../fetchs/movement';
import ExpenseIncome from '../components/ExpenseIncome';
import Transfer from '../components/Transfer';
import generalFetcher from '../fetchs/general';
import transferFetcher from '../fetchs/transfer';
import Filters from '../components/Filters';
//Cookies
import { useCookies } from 'react-cookie';
//reduxjs
import { useSelector, useDispatch } from 'react-redux';
import { setMovements } from '../slicers/movementSlice';
import { setCategories } from '../slicers/categorySlice';
import { setBankAccounts } from '../slicers/bankAccountSlice';
import { setBadges } from '../slicers/badgeSlice';
import { setTransfers } from '../slicers/transferSlice';

const HistoryPage = () => {
  var badgeDictionary = {};
  var accountDictionary = {};
  const [cookies] = useCookies(['token']);
  const [values, setValues] = useState({});
  const windowSize = useWindowSize();
  const dispatch = useDispatch();
  const accounts = useSelector((state) => state.bankAccounts.accounts);
  const categories = useSelector((state) => state.categories.categories);
  const movements = useSelector((state) => state.movements.movements);
  const transfers = useSelector((state) => state.transfers.transfers);
  useSelector((state) => {
    for (let i of state.badges.badgesList) {
      badgeDictionary[i.id] = i.symbol;
    }
    for (let i of state.bankAccounts.accounts) {
      accountDictionary[i.id] = i.bankName;
    }
  });
  const rootStyle = {
    ...mainStyles.rootStyle,
    marginTop:
      windowSize.width < 600 ? '60%' : windowSize.width < 840 ? '35%' : '10%'
  };
  const passMovementFilters = (movement) => {
    var ret = true;
    if (!!values.bankAccount && parseInt(values.bankAccount)) {
      ret = ret && movement.BankAccountId === parseInt(values.bankAccount);
    }
    if (!!values.category && parseInt(values.category)) {
      console.log("entra")
      ret = ret && movement.CategoryId === parseInt(values.category);
    }
    if (!!values.date) {
      let movDate = new Date(movement.date);
      let filtDate = new Date(values.date);
      filtDate.setDate(filtDate.getDate() + 1);
      movDate.setHours(0, 0, 0, 0);
      filtDate.setHours(0, 0, 0, 0);
      ret = ret && +movDate === +filtDate;
    }
    return ret;
  };
  const passTransferFilters = (transfer) => {
    var ret = true;
    if (!!values.bankAccount && parseInt(values.bankAccount)) {
      ret =
        (ret && transfer.senderAccount === parseInt(values.bankAccount)) ||
        transfer.receiverAccount === parseInt(values.bankAccount);
    }
    if (!!values.date) {
      let movDate = new Date(transfer.date);
      let filtDate = new Date(values.date);
      filtDate.setDate(filtDate.getDate() + 1);
      movDate.setHours(0, 0, 0, 0);
      filtDate.setHours(0, 0, 0, 0);
      ret = ret && +movDate === +filtDate;
    }
    return ret;
  };
  useEffect(() => {
    generalFetcher.getBadges(cookies.token).then((badges) => {
      dispatch(setBadges(badges));
    });
    movementFetcher.getAllMovements(cookies.token).then((movements) => {
      dispatch(setMovements(movements));
    });
    bankAccountFetcher.getAllAccounts(cookies.token).then((accounts) => {
      if (accounts.length > 0)
        setValues((prevVal) => ({
          ...prevVal,
          bankAccount: accounts.at(0).id
        }));
      dispatch(setBankAccounts(accounts));
    });
    transferFetcher.getAllTransfers(cookies.token).then((transfers) => {
      dispatch(setTransfers(transfers));
    });
    generalFetcher.getCategories(cookies.token).then((categories) => {
      dispatch(setCategories(categories));
    });
  }, [cookies, dispatch]);
  return (
    <div style={rootStyle}>
      <div style={mainStyles.pageContainerStyle}>
        <p style={mainStyles.titleStyle}>History of Movements</p>
        <Filters
          values={values}
          setValues={setValues}
          accounts={accounts}
          categories={categories}
          badgeDictionary={badgeDictionary}
        />
        {movements
          .filter((movement) => passMovementFilters(movement))
          .map((movement, index) => {
            return (
              <ExpenseIncome
                key={index}
                movement={movement}
                badgeDictionary={badgeDictionary}
              />
            );
          })}
        <span>Transfers</span>
        {transfers
          .filter((transfer) => passTransferFilters(transfer))
          .map((transfer, index) => {
            return (
              <Transfer
                key={index}
                transfer={transfer}
                badgeDictionary={badgeDictionary}
                accountsDictionary={accountDictionary}
                isReceiver={
                  parseInt(values.bankAccount) === transfer.receiverAccount
                }
              />
            );
          })}
      </div>
    </div>
  );
};

export default HistoryPage;
