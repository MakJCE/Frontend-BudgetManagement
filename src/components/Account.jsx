import React from 'react'
import mainStyles from '../mainStyles'
import BankAccountIcon from './jsxIcons/BankAccountIcon'

const containerStyle={
    ...mainStyles.containerStyle,
    justifyContent:'flex-start',
    padding: '10px',
    minWidth: '250px'
}

const Account = ({account}) => {
  return (
    <div style={containerStyle}>
        <BankAccountIcon/>
        <p>{account.bankName}</p>
        <p>{account.accountType}</p>
    </div>
  )
}

export default Account