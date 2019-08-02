import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Large1 extends Component {
	render() {
		return (
			<div style={{ border: '3px solid red', margin: 10 }}>
				<h2>大儿子1</h2>
				<Small1 />
			</div>
		);
	}
}
class Small1 extends Component {
	// step3
	static contextTypes = {
		color: PropTypes.string
	};
	render() {
		return (
			<div style={{ border: '3px solid red', margin: 10, color: this.context.color }}>
				<h4>孙子1</h4>
			</div>
		);
	}
}

class Large2 extends Component {
	render() {
		return (
			<div style={{ border: '3px solid red', margin: 10 }}>
				<h2>大儿子2</h2>
				<Small2 />
			</div>
		);
	}
}
class Small2 extends Component {
	// step3
	static contextTypes = {
		color: PropTypes.string,
		changeColor: PropTypes.func
	};
	// step4: this.context.xxx
	render() {
		return (
			<div style={{ border: '3px solid red', margin: 10, color: this.context.color }}>
				<h4>孙子2</h4>
				<button onClick={() => this.context.changeColor('pink')}>改变孙子的颜色</button>
			</div>
		);
	}
}

export default class OldContext extends Component {
	constructor() {
		super();
		this.state = {
			color: 'green'
		};
	}
	// step1
	static childContextTypes = {
		color: PropTypes.string,
		changeColor: PropTypes.func
	};
	// step2
	getChildContext = () => ({
		color: this.state.color,
		changeColor: color => this.setState({ color })
	});
	render() {
		return (
			<div style={{ border: '3px solid red' }}>
				<h1>父</h1>
				<Large1 />
				<Large2 />
			</div>
		);
	}
}
