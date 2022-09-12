import React, { useState } from 'react';
import mainStyles from '../mainStyles';
import Form from './Form/Form';
import fields from './formsFields/bankAccountFields';
import bankAccountFetcher from '../fetchs/bankAccount';
//reduxjs
import { useDispatch } from 'react-redux';
import { addAccount } from '../slicers/bankAccountSlice';
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

const AddBankAccount = () => {
  const [cookies] = useCookies(['user']);
  const [showForm, setShowForm] = useState();
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    dispatch(addAccount(values));
    bankAccountFetcher
      .createAccount(values, cookies.token)
      .then(() => {
        alert('Bank Account created successfully.');
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
        <AddIcon color={'#5544F2'} /> Add Account
      </div>
      <div style={showForm ? formStyle : { display: 'none' }}>
        <Form
          fields={fields}
          handleOnSubmit={handleSubmit}
          submitButtonLabel="Añadir"
        />
      </div>
    </div>
  );
};

export default AddBankAccount;
