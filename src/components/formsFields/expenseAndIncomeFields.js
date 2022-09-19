const fields = [
  {
    name: 'bank',
    label: 'Banco',
    type: 'select',
    options: [
      { key: '1', value: 'Banco Union' },
      { key: '2', value: 'Banco Bisa' }
    ],
    validate: (val) => {
      return !!val &&val!==0;
    },
    aclaration: 'Required field'
  },
  {
    name: 'accountNumber',
    label: 'Account number',
    type: 'number',
    validate: (val) => {
      return !!val;
    },
    aclaration: 'Required field'
  }
];

export default fields;
