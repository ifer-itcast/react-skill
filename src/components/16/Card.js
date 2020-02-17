import React, { useContext } from 'react';
import { ColorContext } from './Color';
const Card = () => {
	// Step3
	const { color } = useContext(ColorContext);
	return (
		<div style={{ color }}>
			字体颜色为{color}
		</div>
	);
};

export default Card;
