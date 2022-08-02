import React from 'react';
import mainStyles from '../mainStyles';

const cardStyle = {
  ...mainStyles.centerBlock,
  background: '#FFFFFF',
  border: '1px solid #C0C0C0',
  boxShadow: '7px 10px 15px -3px rgba(0, 0, 0, 0.1)',
  borderRadius: '15px',
  padding: '20px 0',
  width: '384px'
};

const Card = ({ children }) => {
  return <div style={cardStyle}>{children}</div>;
};

export default Card;
