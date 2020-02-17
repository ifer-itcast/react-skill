import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

/* export default class Test extends React.Component {
	state = {
		count: 0
	};
	handleClick = () => {
		this.setState({
			count: this.state.count + 1
		});
	};
	componentDidMount() {
		console.log('useEffect=>' + this.state.count);
	}
	componentDidUpdate() {
		console.log('useEffect=>' + this.state.count);
	}
	render() {
		return (
			<div>
				<p>
					{this.state.count}
				</p>
				<button onClick={this.handleClick}>click</button>
			</div>
		);
	}
} */

/* export default () => {
	const [count, setCount] = useState(0);
	useEffect(() => {
		console.log('useEffect=>' + count);
	});
	return (
		<div>
			<p>
				{count}
			</p>
			<button onClick={() => setCount(count + 1)}>click</button>
		</div>
	);
}; */

// useEffect 实现 `componentWillUnmount`

const Index = () => {
	useEffect(() => {
		// console.log('欢迎来到 Index 页面');
		return () => {
			console.log('你离开了 Index 页面');
		};
	}, []);
	return <div>Index</div>;
};
const List = () => {
	useEffect(() => {
		// console.log('欢迎来到 List 页面');
		return () => {
			console.log('你离开了 List 页面');
		};
	}, []);
	return <div>List</div>;
};

export default () => {
	const [count, setCount] = useState(0);
	useEffect(
		() => {
			return () => {
				console.log('只要 count 变化就会执行这里的函数');
			};
		},
		[count]
	);
	return (
		<div>
			<p>
				{count}
			</p>
			<button onClick={() => setCount(count + 1)}>click</button>
			<Router>
				<ul>
					<li>
						<Link to="/">首页</Link>
					</li>
					<li>
						<Link to="/list">列表</Link>
					</li>
				</ul>
				<Route path="/" exact component={Index} />
				<Route path="/list" component={List} />
			</Router>
		</div>
	);
};
