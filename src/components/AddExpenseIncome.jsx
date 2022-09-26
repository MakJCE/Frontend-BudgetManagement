import React, { useState } from 'react';
import mainStyles from '../mainStyles';
import Form from './Form/Form';
import getMovementsFields from './formsFields/expenseAndIncomeFields';
import movementFetcher from '../fetchs/movement';
//reduxjs
import { useSelector, useDispatch } from 'react-redux';
import { addMovement } from '../slicers/movementSlice';
//Cookies
import { useCookies } from 'react-cookie';
//icons
import AddIcon from './jsxIcons/AddIcon';

const addButtonStyle = {
  ...mainStyles.containerStyle,
  justifyContent: 'flex-start',
  padding: '10px',
  minWidth: '250px',
  cursor: 'pointer'
};
const formStyle = {
  ...mainStyles.containerStyle
};

const AddExpenseIncome = () => {
  const [cookies] = useCookies(['token']);
  const [showForm, setShowForm] = useState();
  const badgesList = useSelector((state) => state.badges.badgesList);
  const accounts = useSelector((state) => state.bankAccounts.accounts);
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    values.date = new Date();
    console.log(values);
    dispatch(addMovement(values));
    movementFetcher
      .createMovement(values, cookies.token)
      .then(() => {
        alert(`${values.type} added successfully.`);
        window.location.reload();
      })
      .catch((err) => {
        alert('Something went wrong.');
      });
  };
  return (
    <div>
      <div
        style={addButtonStyle}
        onClick={() => {
          setShowForm(!showForm);
        }}
      >
        <AddIcon color={'#5544F2'} /> Add Expense & Income
      </div>
      <div style={showForm ? formStyle : { display: 'none' }}>
        <Form
          fields={getMovementsFields(badgesList, accounts, categories)}
          handleOnSubmit={handleSubmit}
          submitButtonLabel="Add"
        />
      </div>
    </div>
  );
};

export default AddExpenseIncome;
