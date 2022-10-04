import React from 'react';
import mainStyles from '../mainStyles';
import BankAccountIcon from './jsxIcons/BankAccountIcon';
//reduxjs
import { useSelector } from 'react-redux';

const containerStyle = {
  ...mainStyles.containerStyle,
  justifyContent: 'space-around',
  padding: '10px',
  minWidth: '250px',
  gap: '10px'
};

const Account = ({ account }) => {
  const badgesList = useSelector((state) => state.badges.badgesList);
  const getBadgeSymbol = (id) => {
    return badgesList.find((badge) => badge.id === id)?.symbol;
  };
  return (
    <div style={containerStyle}>
      <BankAccountIcon color={'#5544F2'} />
      <div style={{ lineHeight: '5px' }}>
        <p style={{ fontWeight: '600' }}>{account?.bankName}</p>
        <p style={{ color: '#31AEB3' }}>{account?.accountType}</p>
      </div>
      <div>
        <span style={{fontSize: '22px'}}>{(account?.founds || 0).toFixed(2)}</span>
        {getBadgeSymbol(account?.BadgeId) || '...'}
      </div>
    </div>
  );
};

export default Account;
