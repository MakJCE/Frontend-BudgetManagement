export const loginFields = [
  {
    name: 'username',
    label: 'Username',
    type: 'text',
    validate: (val) => {
      return !!val;
    },
    aclaration: 'El campo es requerido'
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    validate: (val) => {
      return !!val;
    },
    aclaration: 'El campo es requerido'
  }
];
export const registerFields = [
  {
    name: 'username',
    label: 'Username',
    type: 'text',
    validate: (val) => {
      return !!val;
    },
    aclaration: 'El campo es requerido'
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    validate: (val) => {
      return (
        !!val && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(val)
      );
    },
    aclaration: 'Contraseña invalida'
  },
  {
    name: 'confirmPassword',
    label: 'Confirm Password',
    type: 'password',
    validate: (val) => {
      return document.querySelector('input[name=password]').value === val;
    },
    aclaration: 'Contraseñas no coinciden'
  }
];
