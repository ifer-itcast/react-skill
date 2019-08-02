import React, { Component } from 'react';

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
    static getDerivedStateFromProps(nextProps, prevState) {
        // 将传入的 props 映射到 state 上面
        const { number } = nextProps;
        return number % 2 === 0 ? { num: number + 1 } : { num: number + 3 };
    }
	render() {
		return (
			<div>
				{this.state.num}
			</div>
		);
	}
}

export default class GetDerivedStateFromProps extends Component {
	constructor(props) {
		super(props);
		this.state = { number: 0 };
	}
	handleClick = () => {
		this.setState({ number: this.state.number + 1 });
	};
	render() {
		return (
			<div>
				<Counter number={this.state.number} />
				<button onClick={this.handleClick}>+</button>
			</div>
		);
	}
}
