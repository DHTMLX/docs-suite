import React from 'react';

import cssstyles from './style.module.scss';

const Returns = ({ children }) => {
	return (
		<div className={cssstyles.returns}>
			<h4>Returns:</h4>
			{children}
		</div>
	);
};

export default Returns;
