import React from 'react';

import cssstyles from './style.module.scss';

const Values = ({ children }) => {
	return (
		<div className={cssstyles.values}>
			<h4>Values:</h4>
			<p>{children}</p>
		</div>
	);
};

export default Values;
