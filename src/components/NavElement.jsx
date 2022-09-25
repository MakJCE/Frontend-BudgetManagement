import React from 'react';
import mainStyles from '../mainStyles';

const nonSelectedStyle ={
  ...mainStyles.containerStyle,
  width: '54px',
  height: '54px',
  cursor:'pointer'
};

const selectedStyle = {
  ...nonSelectedStyle,
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
};

const NavElement = ({ Icon, label, isSelected = false, onClick }) => {
  return (
    <div
      style={{ ...(isSelected ? selectedStyle : nonSelectedStyle) }}
      title={label}
      onClick={onClick}
    >
      {<Icon color={isSelected? '#5544F2':'#31AEB3'}/>}
    </div>
  );
};

export default NavElement;
