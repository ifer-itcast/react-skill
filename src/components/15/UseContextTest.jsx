import React, { useState, createContext, useContext } from 'react';
// step1
const CountContext = createContext();

export default () => {
	const [count, setCount] = useState(0);
	return (
		<div>
			<p>
				{count}
			</p>
			<button onClick={() => setCount(count + 1)}>click</button>
			{/* step2 */}
			<CountContext.Provider value={count}>
				<Counter1 />
			</CountContext.Provider>
		</div>
	);
};

const Counter1 = () => {
	return <Counter2 />;
};

const Counter2 = () => {
	// step3
	const count = useContext(CountContext);
	return (
		<div>
			{count}
		</div>
	);
};
