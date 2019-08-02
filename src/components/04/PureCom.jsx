import React, { PureComponent, Component } from 'react';

export default class PureCom extends Component {
	constructor() {
		super();
		this.state = {
			res: 0
		};
		this.inputRef = React.createRef();
	}
	handleClick = () => {
		this.setState({
			res: this.state.res + (parseInt(this.inputRef.current.value) || 0)
		});
	};
	render() {
		return (
			<div>
				<input type="text" ref={this.inputRef} />
				<button onClick={this.handleClick}>计算</button>
				<Child res={this.state.res} />
			</div>
		);
	}
}

class Child extends PureComponent {
	render() {
		console.log('res 没有变化时我不会 render ~~');
		return (
			<div>
				结果是：{this.props.res}
			</div>
		);
	}
}

// 这里是函数组件是怎么办？
// 让父组件继承 PureCom 或者 Child = React.memo(Child);
/* function Child(props) {
    console.log('res 没有变化时我不会 render ~~');
    return (
        <div>
            结果是：{props.res}
        </div>
    )
} */
