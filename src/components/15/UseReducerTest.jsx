import React, { useReducer } from 'react';

export default () => {
	const [count, dispatch] = useReducer((state, action) => {
		switch (action) {
			case 'add':
				return state + 1;
			case 'sub':
				return state - 1;
			default:
				return state;
		}
	}, 0);

	return (
		<div>
			<p>
				{count}
			</p>
			<button onClick={() => dispatch('add')}>add</button>
			<button onClick={() => dispatch('sub')}>sub</button>
		</div>
	);
};
