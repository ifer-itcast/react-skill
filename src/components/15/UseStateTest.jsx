import React, { Component, useState } from 'react';
import { useEffect } from 'react';

export default () => {
	const [num, setNum] = useState(0);
	return (
		<div>
			<p>
				{num}
			</p>
			<button onClick={() => setNum(num + 1)}>click</button>
		</div>
	);
};
