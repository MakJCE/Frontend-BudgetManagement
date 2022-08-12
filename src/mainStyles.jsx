const linkStyle = {
  textDecorationLine: 'underline',
  color: 'blue',
  cursor: 'pointer'
};
const centerBlock = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};
const containerStyle = {
  ...centerBlock,
  background: '#FFFFFF',
  border: '1px solid #C0C0C0',
  borderRadius: '5px'
};

const rootStyle = {
  ...centerBlock,
  marginTop:'10%'
};

const pageContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '70vh',
  height: '50vh'
}

const titleStyle = {
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '36px',
  lineHeight: '20px',
  textDecoration: 'underline'
};

const mainStyles = {
  linkStyle,
  centerBlock,
  containerStyle,
  titleStyle,
  rootStyle,
  pageContainerStyle
};

export default mainStyles;
