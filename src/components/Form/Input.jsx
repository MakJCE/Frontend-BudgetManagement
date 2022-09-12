import React from 'react';

const inputStyle = {
  marginLeft: '10px',
  width: '177px'
};
const errorStyle = {
  ...inputStyle,
  border: '1px solid red'
};
const Input = ({ field, values, onChange, error=false }) => {
  return (
    <>
      <input
        style={error ? errorStyle : inputStyle}
        name={field.name}
        type={field.type}
        value={values[field.name] || ''}
        placeholder={field.placeholder || ''}
        onChange={onChange}
      />
      <p style={{ margin: 0, color: 'red', textAlign: 'right' }}>
        {error ? field.aclaration : ''}
      </p>
    </>
  );
};

export default Input;
