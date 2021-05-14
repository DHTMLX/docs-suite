import React from 'react';

import cssstyles from './style.module.scss';

const Params = ({ children }) => {
	return (
		<div className={cssstyles.params}>
			<h4>Parameters:</h4>
			{children}
		</div>
	);
};

export default Params;
