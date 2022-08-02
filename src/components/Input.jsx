import React from 'react';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const labelStyle = {
  display: 'flex',
  flexDirection: 'column',
  fontWeight: 400,
  fontSize: '21px',
  lineHeight: '24px'
};

const Input = ({ inputType, name, value, label, onChange }) => {
  return (
    <label style={labelStyle}>
      {capitalizeFirstLetter(label)}
      <input type={inputType} name={name} value={value} onChange={onChange} />
    </label>
  );
};

export default Input;
