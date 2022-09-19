export const loginFields = [
  {
    name: 'username',
    label: 'Username',
    type: 'text',
    validate: (val) => {
      return !!val;
    },
    aclaration: 'Required field'
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    validate: (val) => {
      return !!val;
    },
    aclaration: 'Required field'
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
    aclaration: 'Required field'
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: '8 chars, 1 capital letter, 1 num and 1 symbol',
    validate: (val) => {
      return (
        !!val && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(val)
      );
    },
    aclaration: 'Invalid password'
  },
  {
    name: 'confirmPassword',
    label: 'Confirm Password',
    type: 'password',
    validate: (val) => {
      return document.querySelector('input[name=password]').value === val;
    },
    aclaration: 'Passwords not match'
  }
];
