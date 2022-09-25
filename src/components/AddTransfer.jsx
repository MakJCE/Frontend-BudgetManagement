import React, { useState } from 'react';
import mainStyles from '../mainStyles';
import Form from './Form/Form';
import getTransfersFields from './formsFields/transfersFields';
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

const AddTransfer = () => {
  const [cookies] = useCookies(['token']);
  const [showForm, setShowForm] = useState();
  const badgesList = useSelector((state) => state.badges.badgesList);
  const accounts = useSelector((state) => state.bankAccounts.accounts);
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    values.date = new Date();
    console.log(values);
    dispatch(addMovement(values));
    // movementFetcher
    //   .createMovement(values, cookies.token)
    //   .then(() => {
    //     alert(`${values.type} created successfully.`);
    //     window.location.reload();
    //   })
    //   .catch((err) => {
    //     alert('Something went wrong.');
    //   });
  };
  return (
    <div>
      <div
        style={addButtonStyle}
        onClick={() => {
          setShowForm(!showForm);
        }}
      >
        <AddIcon color={'#5544F2'} /> Add Transfer
      </div>
      <div style={showForm ? formStyle : { display: 'none' }}>
        <Form
          fields={getTransfersFields(badgesList, accounts)}
          handleOnSubmit={handleSubmit}
          submitButtonLabel="Add"
        />
      </div>
    </div>
  );
};

export default AddTransfer;
