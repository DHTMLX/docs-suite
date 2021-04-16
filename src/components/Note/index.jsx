import React from 'react';

import cssstyles from './styles.module.scss';

const Note = ({ children }) => {
  return (
    <div className={cssstyles.note}>
      <div className={cssstyles.note__iconWrapper}>
        <span className={cssstyles.note__icon}>i</span>
      </div>
      <p className={cssstyles.note__text}>{children}</p>
    </div>
  );
};

export default Note;