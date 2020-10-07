import React from 'react';

export const Balance = ({ balance }) => {
  return (
    <React.Fragment>
      <h4>Your Balance</h4>
      <h1 id="balance">${balance}</h1>
    </React.Fragment>
  );
};

export default Balance;
