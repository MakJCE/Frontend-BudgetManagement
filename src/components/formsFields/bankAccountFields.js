const fields = [
  {
    name: 'bankName',
    label: 'Bank',
    type: 'text',
    validate: (val) => {
      return !!val;
    },
    aclaration: 'Required field'
  },
  {
    name: 'accountNumber',
    label: 'Account Number',
    type: 'text',
    placeholder: 'xxxx-xxxx-xxxx-xxxx',
    validate: (val) => {
      return !!val;
    },
    aclaration: 'Required field'
  },
  {
    name: 'accountType',
    label: 'Account Type',
    type: 'select',
    options: [
      { key: 'Credit', value: 'Credit' },
      { key: 'Debit', value: 'Debit' }
    ],
    validate: (val) => {
      return !!val &&val!==0;
    },
    aclaration: 'Required field'
  }
];

const getBankAccountFields = (badges) => {
  const _badges = badges.map((badge) => ({ key: badge.id, value: badge.name }));
  return [
    ...fields,
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

export default getBankAccountFields;
