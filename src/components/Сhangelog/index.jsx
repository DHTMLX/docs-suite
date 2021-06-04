import React from 'react';

import cssstyles from './styles.module.scss';

const Changelog = ({ children }) => {
  return (
    <div>
      <h4>Change log:</h4>
      <p className={cssstyles.changelog}>{children}</p>
    </div>
  );
};

export default Changelog;
