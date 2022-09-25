import React from 'react';
import mainStyles from '../mainStyles';

const containerStyle = {
  ...mainStyles.containerStyle,
  justifyContent: 'space-around',
  padding: '10px',
  minWidth: '250px',
  gap:'10px'
};

const ExpenseIncome = ({ movement, badgeDictionary }) => {
  return (
    <div style={containerStyle}>
        <div>
            {Intl.DateTimeFormat('es-MX', { dateStyle: 'short', timeStyle: 'short' }).format(new Date(movement.date))}
        </div>
      {movement?.type === 'income' ? (
        <div style={{ color: '#00AD12' }}>
            {`+ ${movement.amount} ${badgeDictionary[movement.BadgeId]}`}
        </div>
      ) : (
        <div style={{ color: '#AD0012' }}>
            {`- ${movement.amount} ${badgeDictionary[movement.BadgeId]}`}
        </div>
      )}
    </div>
  );
};

export default ExpenseIncome;
