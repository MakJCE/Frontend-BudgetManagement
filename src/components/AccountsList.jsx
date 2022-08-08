import React from 'react'
import Account from './Account'
import mainStyles from '../mainStyles'

const listStyle = {
    ...mainStyles.centerBlock,
    gap:'10px'
}

const accounts=[
    {id: 1, bankName: 'Banco Bisa', accountType: 'Credit Card'},
    {id: 2, bankName: 'Banco Bisa', accountType: 'Credit Card'},
    {id: 3, bankName: 'Banco Bisa', accountType: 'Credit Card'},
]

const AccountsList = () => {
  return (
    <div style={listStyle}>
        { accounts.map((account, index) => {
            return <Account key={index} account={account}/>
        })}
    </div>
  )
}

export default AccountsList