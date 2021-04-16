import React from 'react';

import cssstyles from './styles.module.scss';

const Type = ({ children }) => {
  return (
    <div className={cssstyles.signature}>{children}</div>
  );
};

export default Type;