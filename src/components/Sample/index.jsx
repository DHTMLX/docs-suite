import React from 'react';

import cssstyles from './styles.module.scss';

const Sample = ({ children }) => {
  return (
    <div className={cssstyles.sample}>
      <div className={cssstyles.note__iconWrapper}>
        <span className={cssstyles.note__icon}>i</span>
      </div>
      <p className={cssstyles.note__text}>{children}</p>
    </div>
  );
};

export default Sample;