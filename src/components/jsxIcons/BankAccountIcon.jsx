import React from 'react';

const BankAccountIcon = ({color="#000000"}) => {
  return (
    <div>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.66659 16.6667V28.3333H11.6666V16.6667H6.66659ZM16.6666 16.6667V28.3333H21.6666V16.6667H16.6666ZM3.33325 36.6667H34.9999V31.6667H3.33325V36.6667ZM26.6666 16.6667V28.3333H31.6666V16.6667H26.6666ZM19.1666 1.66667L3.33325 10V13.3333H34.9999V10L19.1666 1.66667Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default BankAccountIcon;
