import React, { createContext } from 'react';
import { useReducer } from 'react';

// Step1
export const ColorContext = createContext({});

export const UPDATE_COLOR = 'UPDATE_COLOR';

const reducer = (state, action) => {
	switch (action.type) {
		case UPDATE_COLOR:
			return action.color;
		default:
			return state;
	}
};

const Color = props => {
	const [color, dispatch] = useReducer(reducer, 'blue');
	// Step2
	return (
		<ColorContext.Provider value={{ color, dispatch }}>
			{props.children}
		</ColorContext.Provider>
	);
};

export default Color;
