const linkStyle= {
  textDecorationLine: 'underline',
  color: 'blue',
  cursor:'pointer'
}
const centerBlock = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const rootStyle = {
  ...centerBlock,
  height: '90vh'
};

const mainStyles = {
  linkStyle,
  centerBlock,
  rootStyle
};

export default mainStyles;
