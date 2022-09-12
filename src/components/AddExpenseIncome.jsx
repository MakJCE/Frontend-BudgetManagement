import React, { useState } from 'react';
import mainStyles from '../mainStyles';
import Form from './Form/Form';
import fields from './formsFields/expenseAndIncomeFields';
//icons
import AddIcon from './jsxIcons/AddIcon';

const addButtonStyle = {
  ...mainStyles.containerStyle,
  justifyContent: 'flex-start',
  padding: '10px',
  minWidth: '250px',
  cursor:'pointer'
};
const formStyle = {
  ...mainStyles.containerStyle
};

const AddExpenseIncome = () => {
  const [showForm, setShowForm] = useState();
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
        <Form fields={fields} />
      </div>
    </div>
  );
};

export default AddExpenseIncome;
