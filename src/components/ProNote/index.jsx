import React from 'react';

import cssstyles from './styles.module.scss';

const ProNote = ({ children }) => {
  return (
    <div className={cssstyles.note}>
      <div className={cssstyles.note__iconWrapper}>
        <span className={cssstyles.note__icon}>&#8252;</span>
      </div>
      <p className={cssstyles.note__text}>{children}</p>
    </div>
  );
};

export default ProNote;