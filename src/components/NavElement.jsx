import React from 'react';
import mainStyles from '../mainStyles';
import { useNavigate } from 'react-router-dom';

const containerStyle = {
  ...mainStyles.centerBlock,
  background: '#FFFFFF',
  border: '1px solid #C0C0C0',
  borderRadius: '5px',
  width: '54px',
  height: '54px',
  cursor:'pointer'
};
const selectedStyle = {
  ...containerStyle,
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
};

const NavElement = ({ Icon, label, isSelected = false, url }) => {
    const navigate = useNavigate();
  return (
    <div
      style={{ ...(isSelected ? selectedStyle : containerStyle) }}
      title={label}
      onClick={()=>navigate(url)}
    >
      {<Icon color={isSelected? '#5544F2':'#44EBF2'}/>}
    </div>
  );
};

export default NavElement;
