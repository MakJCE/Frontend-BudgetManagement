import React from 'react';
import mainStyles from '../mainStyles';

const containerStyle = {
  ...mainStyles.containerStyle,
  justifyContent: 'space-around',
  padding: '10px',
  minWidth: '250px',
  gap: '10px'
};

const Transfer = ({
  transfer,
  badgeDictionary,
  accountsDictionary,
  isReceiver = true
}) => {
  return (
    <div style={containerStyle}>
      <div>
        {Intl.DateTimeFormat('es-MX', {
          dateStyle: 'short',
          timeStyle: 'short'
        }).format(new Date(transfer.date))}
      </div>
      {isReceiver ? (
        <div style={{ color: '#00AD12' }}>
          {`+ ${transfer.amount} ${badgeDictionary[transfer.BadgeId]} from ${
            accountsDictionary[transfer.senderAccount]
          }`}
        </div>
      ) : (
        <div style={{ color: '#AD0012' }}>
          {`- ${transfer.amount} ${badgeDictionary[transfer.BadgeId]} to ${
            accountsDictionary[transfer.receiverAccount]
          }`}
        </div>
      )}
    </div>
  );
};

export default Transfer;
