import React from 'react';
import mainStyles from '../mainStyles';
import AccountsList from '../components/AccountsList'

const subtitleStyle = {
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '24px',
  lineHeight: '10px'
};

const Dashboard = () => {
  return (
    <div style={mainStyles.rootStyle}>
      <div style={mainStyles.pageContainerStyle}>
        <p style={mainStyles.titleStyle}>Dashboard</p>
        <p style={subtitleStyle}>Accounts</p>
        <AccountsList/>
      </div>
    </div>
  );
};

export default Dashboard;