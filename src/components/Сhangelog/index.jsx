import React from 'react';

import cssstyles from './styles.module.scss';

const Changelog = ({ children }) => {
  return (
    <p className={cssstyles.changelog}>{children}</p>
  );
};

export default Changelog;