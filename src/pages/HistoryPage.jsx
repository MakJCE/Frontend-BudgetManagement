import React from 'react';
import mainStyles from '../mainStyles';
import useWindowSize from '../useWindowHook';

const HistoryPage = () => {
  const windowSize = useWindowSize();
  const rootStyle = {
    ...mainStyles.rootStyle,
    marginTop:
      windowSize.width < 600 ? '60%' : windowSize.width < 840 ? '35%' : '10%'
  };
  return (
    <div style={rootStyle}>
      <div style={mainStyles.pageContainerStyle}>
      <p style={mainStyles.titleStyle}>History of Movements</p>
    </div>;
    </div>
  );
};

export default HistoryPage;
