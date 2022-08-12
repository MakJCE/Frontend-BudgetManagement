import React, { useState } from 'react';
import mainStyles from '../mainStyles';
import Form from './Form';
//icons
import AddIcon from './jsxIcons/AddIcon';

const addButtonStyle = {
  ...mainStyles.containerStyle,
  justifyContent: 'flex-start',
  padding: '10px',
  minWidth: '250px'
};
const formStyle = {
  ...mainStyles.containerStyle
};

const AddBankAccount = () => {
  const [showForm, setShowForm] = useState();
  return (
    <div>
      <div
        style={addButtonStyle}
        onClick={() => {
          setShowForm(!showForm);
        }}
      >
        <AddIcon /> Add Account
      </div>
      <div style={showForm ? formStyle : { display: 'none' }}>
        <Form fields={fields}/>
      </div>
    </div>
  );
};

export default AddBankAccount;

const fields = [
  {
    name: 'bankName',
    label: 'Banco',
    type: 'text',
    validate: (val) => {
      return !!val;
    },
    aclaration: 'El campo es requerido'
  }
];
