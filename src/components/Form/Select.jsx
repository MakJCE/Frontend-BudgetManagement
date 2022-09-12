import React from 'react';

const selectStyle = {
  marginLeft: '10px',
  width: '185px',
};
const errorStyle = {
  ...selectStyle,
  border: '1px solid red'
};

const Select = ({ field, values, onChange, error = false }) => {
  return (
    <>
      <select
        onChange={onChange}
        value={values[field.name]}
        style={error ? errorStyle : selectStyle}
        name={field.name}
        id={field.name}
      >
        <option value={'0'}>none</option>
        {field.options.map((option) => (
          <option key={option.key} value={option.key}>
            {option.value}
          </option>
        ))}
      </select>
      <p style={{margin:0, color:'red', textAlign:'right'}}>{error? field.aclaration:''}</p>
    </>
  );
};

export default Select;
