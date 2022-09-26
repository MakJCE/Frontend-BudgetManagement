const getTransfersFields = (badges, bankAccounts) => {
    const _badges = badges.map((badge) => ({ key: badge.id, value: badge.name }));
    const _bankAccounts = bankAccounts.map((bankAccount) => ({
      key: bankAccount.id,
      value: bankAccount.bankName
    }));
    return [
      {
        name: 'senderAccount',
        label: 'Sender Bank Account',
        type: 'select',
        options: _bankAccounts,
        validate: (val) => {
          console.log(val)
          return !!parseInt(val);
        },
        aclaration: 'Required field'
      },
      {
        name: 'receiverAccount',
        label: 'Receiver Bank Account',
        type: 'select',
        options: _bankAccounts,
        validate: (val) => {
          let senderVal = parseInt(document.querySelector('select[name=senderAccount]').value);
          return !!parseInt(val) && parseInt(val)!==senderVal;
        },
        aclaration: 'Required field not same sender'
      },
      {
        name: 'amount',
        label: 'Monto',
        type: 'number',
        validate: (val) => {
          let senderVal = parseInt(document.querySelector('select[name=senderAccount]').value);
          let senderAccount = bankAccounts.find(b=>b.id === senderVal);
          return !!parseInt(val) && parseInt(val) <= senderAccount?.founds;
        },
        aclaration: 'Required field less than founds'
      },
      {
        name: 'BadgeId',
        label: 'Badge',
        type: 'select',
        options: _badges,
        validate: (val) => {
          return !!val;
        },
        aclaration: 'Required field'
      }
    ];
  };
  
  export default getTransfersFields;