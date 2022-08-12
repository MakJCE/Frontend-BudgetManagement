import React from 'react';

const AddIcon = ({color= '#000000'}) => {
  return (
    <div>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17 15V8H15V15H8V17H15V24H17V17H24V15H17Z" fill={color} />
      </svg>
    </div>
  );
};

export default AddIcon;