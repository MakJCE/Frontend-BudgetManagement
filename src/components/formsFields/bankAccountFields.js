const fields = [
  {
    name: 'bankName',
    label: 'Banco',
    type: 'text',
    validate: (val) => {
      return !!val;
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
  },
  {
    name: 'accountType',
    label: 'Tipo de Cuenta',
    type: 'text',
    validate: (val) => {
      return !!val;
    },
    aclaration: 'El campo es requerido'
  },
];

export default fields;