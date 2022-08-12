import React from 'react';
import mainStyles from '../mainStyles';
import AccountsList from '../components/AccountsList'
import useWindowSize from '../useWindowHook';

const subtitleStyle = {
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '24px',
  lineHeight: '10px'
};

const Dashboard = () => {
  const windowSize = useWindowSize();
  const rootStyle = {...mainStyles.rootStyle, marginTop:(windowSize.width<600)? '60%': (windowSize.width<840)? '35%':'10%' }
  return (
    <div style={rootStyle}>
      <div style={mainStyles.pageContainerStyle}>
        <p style={mainStyles.titleStyle}>Dashboard</p>
        <p style={subtitleStyle}>Accounts</p>
        <AccountsList/>
      </div>
    </div>
  );
};

export default Dashboard;
