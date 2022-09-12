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
    aclaration: 'El campo es requerido'
  },
  {
    name: 'accountNumber',
    label: 'Número de cuenta',
    type: 'number',
    validate: (val) => {
      return !!val;
    },
    aclaration: 'El campo es requerido'
  }
];

export default fields;
