import React from 'react';

const UserIcon = ({color = '#000000'}) => {
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
          d="M7.7 30.2C9.4 28.9 11.3 27.8747 13.4 27.124C15.5 26.3747 17.7 26 20 26C22.3 26 24.5 26.3747 26.6 27.124C28.7 27.8747 30.6 28.9 32.3 30.2C33.4667 28.8333 34.3753 27.2833 35.026 25.55C35.6753 23.8167 36 21.9667 36 20C36 15.5667 34.442 11.7913 31.326 8.674C28.2087 5.558 24.4333 4 20 4C15.5667 4 11.792 5.558 8.676 8.674C5.55867 11.7913 4 15.5667 4 20C4 21.9667 4.32533 23.8167 4.976 25.55C5.62533 27.2833 6.53333 28.8333 7.7 30.2ZM20 22C18.0333 22 16.3747 21.3253 15.024 19.976C13.6747 18.6253 13 16.9667 13 15C13 13.0333 13.6747 11.3747 15.024 10.024C16.3747 8.67467 18.0333 8 20 8C21.9667 8 23.6253 8.67467 24.976 10.024C26.3253 11.3747 27 13.0333 27 15C27 16.9667 26.3253 18.6253 24.976 19.976C23.6253 21.3253 21.9667 22 20 22ZM20 40C17.2333 40 14.6333 39.4747 12.2 38.424C9.76667 37.3747 7.65 35.95 5.85 34.15C4.05 32.35 2.62533 30.2333 1.576 27.8C0.525334 25.3667 0 22.7667 0 20C0 17.2333 0.525334 14.6333 1.576 12.2C2.62533 9.76667 4.05 7.65 5.85 5.85C7.65 4.05 9.76667 2.62467 12.2 1.574C14.6333 0.524667 17.2333 0 20 0C22.7667 0 25.3667 0.524667 27.8 1.574C30.2333 2.62467 32.35 4.05 34.15 5.85C35.95 7.65 37.3747 9.76667 38.424 12.2C39.4747 14.6333 40 17.2333 40 20C40 22.7667 39.4747 25.3667 38.424 27.8C37.3747 30.2333 35.95 32.35 34.15 34.15C32.35 35.95 30.2333 37.3747 27.8 38.424C25.3667 39.4747 22.7667 40 20 40Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default UserIcon;