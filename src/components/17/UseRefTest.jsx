import React, { useRef, useState } from 'react';
import { useEffect } from 'react';

/* export default () => {
	const inputEl = useRef(null);
	const onButtonClick = () => {
        inputEl.current.value = 'hello world';
	};
	return (
		<div>
			<input type="text" ref={inputEl} />
			<button onClick={onButtonClick}>click</button>
		</div>
	);
}; */

export default () => {
	const [text, setText] = useState('xxx');
	const textRef = useRef();

	useEffect(() => {
		// 把每次变化的 text 挂载到 textRef.current 上
		textRef.current = text;
		console.log(textRef.current);
	});
	return (
		<input
			value={text}
			onChange={e => {
				setText(e.target.value);
			}}
		/>
	);
};
