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
const containerStyle = {
  ...centerBlock,
  background: '#FFFFFF',
  border: '1px solid #C0C0C0',
  borderRadius: '5px',
};

const rootStyle = {
  ...centerBlock,
  height: '90vh'
};

const mainStyles = {
  linkStyle,
  centerBlock,
  containerStyle,
  rootStyle
};

export default mainStyles;
