import React from 'react';
import Select from '../components/Form/Select';

const Filters = ({ values, setValues, accounts, categories }) => {
  const banksField = {
    name: 'bankAccount',
    options: accounts.map((bankAccount) => ({
      key: bankAccount.id,
      value: bankAccount.bankName
    }))
  };
  const categoryField = {
    name: 'category',
    options: categories.map((category) => ({
      key: category.id,
      value: category.name
    }))
  };
  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
      <div style={{ display: 'flex', gap: '10px' }}>
        Bank Account:
        <Select values={values} field={banksField} onChange={onChange} />
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        Category:
        <Select values={values} field={categoryField} onChange={onChange} />
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        Fecha:
        <input
          type="date"
          name="date"
          value={values.date}
          onChange={(event) => {
            let newDate = event.target.value;
            setValues({ ...values, [event.target.name]: newDate });
          }}
        />
      </div>
    </div>
  );
};

export default Filters;
