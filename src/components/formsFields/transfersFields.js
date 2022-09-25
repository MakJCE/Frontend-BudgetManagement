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
          return !!val;
        },
        aclaration: 'Required field'
      },
      {
        name: 'receiverAccount',
        label: 'Receiver Bank Account',
        type: 'select',
        options: _bankAccounts,
        validate: (val) => {
          return !!val;
        },
        aclaration: 'Required field'
      },
      {
        name: 'amount',
        label: 'Monto',
        type: 'number',
        validate: (val) => {
          return !!val;
        },
        aclaration: 'Required field'
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