import React, { useState, useEffect } from 'react';
import mainStyles from '../mainStyles';
import useWindowSize from '../useWindowHook';
import Select from '../components/Form/Select';
import bankAccountFetcher from '../fetchs/bankAccount';
import movementFetcher from '../fetchs/movement';
import ExpenseIncome from '../components/ExpenseIncome';
import generalFetcher from '../fetchs/general';
//Cookies
import { useCookies } from 'react-cookie';
//reduxjs
import { useSelector, useDispatch } from 'react-redux';
import { setMovements } from '../slicers/movementSlice';
import { setBankAccounts } from '../slicers/bankAccountSlice';
import { setBadges } from '../slicers/badgeSlice';

const HistoryPage = () => {
  var badgeDictionary = {};
  const [cookies] = useCookies(['token']);
  const [values, setValues] = useState({});
  const [selectedAccount, setSelectedAccount] = useState({});
  const windowSize = useWindowSize();
  const dispatch = useDispatch();
  const accounts = useSelector((state) => state.bankAccounts.accounts);
  const movements = useSelector((state) => state.movements.movements);
  const badgesList = useSelector((state) => {
    let list =state.badges.badgesList
    for(let i of list){
      badgeDictionary[i.id] = i.symbol;
    }
    return list;
  });
  const banksField = {
    name: 'bankAccount',
    options: accounts.map((bankAccount) => ({
      key: bankAccount.id,
      value: bankAccount.bankName
    }))
  };
  const rootStyle = {
    ...mainStyles.rootStyle,
    marginTop:
      windowSize.width < 600 ? '60%' : windowSize.width < 840 ? '35%' : '10%'
  };
  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    setSelectedAccount(accounts.find(account => account.id === parseInt(event.target.value)))
  };
  useEffect(() => {
    generalFetcher.getBadges(cookies.token).then((badges) => {
      dispatch(setBadges(badges));
    });
    movementFetcher.getAllMovements(cookies.token).then((movements) => {
      dispatch(setMovements(movements));
    });
    bankAccountFetcher.getAllAccounts(cookies.token).then((accounts) => {
      dispatch(setBankAccounts(accounts));
    });
  }, [cookies, dispatch]);
  return (
    <div style={rootStyle}>
      <div style={mainStyles.pageContainerStyle}>
        <p style={mainStyles.titleStyle}>History of Movements</p>
        <span>
          Bank Account:
          <Select values={values} field={banksField} onChange={onChange} />
        </span>
        {!!values.bankAccount && !!parseInt(values.bankAccount) && (
          <p>{`Total: ${selectedAccount.founds} ${badgeDictionary[selectedAccount.BadgeId]}`}</p>
        )}
        {!!values.bankAccount &&
          !!parseInt(values.bankAccount) &&
          movements
            .filter(
              (movement) =>
                movement.BankAccountId === parseInt(values.bankAccount)
            )
            .map((movement, index) => {
              return <ExpenseIncome key={index} movement={movement} badgeDictionary={badgeDictionary} />;
            })}
      </div>
    </div>
  );
};

export default HistoryPage;
