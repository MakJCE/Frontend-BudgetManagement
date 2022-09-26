const fields = [
  {
    name: 'type',
    label: 'Tipo',
    type: 'select',
    options: [
      { key: 'income', value: 'Income' },
      { key: 'expense', value: 'Expense' }
    ],
    validate: (val) => {
      return !!val && val !== 0;
    },
    aclaration: 'Required field'
  }
];

const getMovementsFields = (badges, bankAccounts, categories) => {
  const _badges = badges.map((badge) => ({ key: badge.id, value: badge.name }));
  const _categories = categories.map((category) => ({
    key: category.id,
    value: category.name
  }));
  const _bankAccounts = bankAccounts.map((bankAccount) => ({
    key: bankAccount.id,
    value: bankAccount.bankName
  }));
  return [
    ...fields,
    {
      name: 'CategoryId',
      label: 'Category',
      type: 'select',
      options: _categories,
      validate: (val) => {
        return !!val;
      },
      aclaration: 'Required field'
    },
    {
      name: 'BankAccountId',
      label: 'Bank Account',
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
        let type = document.querySelector('select[name=type]').value;
        let selected = document.querySelector(
          'select[name=BankAccountId]'
        ).value;
        let account = bankAccounts.find((b) => b.id === parseInt(selected));
        console.log(type, account)
        return (
          !!parseInt(val) &&
          (type === 'expense'
            ? parseInt(val) <= account.founds
            : true)
        );
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

export default getMovementsFields;
