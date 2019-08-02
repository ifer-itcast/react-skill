import React, { Component } from 'react';
// Step1
const ThemeContent = React.createContext();

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
	static contextType = ThemeContent;
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
	// step4: this.context.xxx
	render() {
		return (
			<ThemeContent.Consumer>
			{
				value => (
					<div style={{ border: '3px solid red', margin: 10, color: value.color }}>
						<h4>孙子2</h4>
						<button onClick={() => value.changeColor('pink')}>改变孙子的颜色</button>
					</div>
				)
			}
			</ThemeContent.Consumer>
		);
	}
}

export default class NewContext extends Component {
	constructor(props) {
		super(props);
		this.state = {
			color: 'green'
		};
	}
	changeColor = color => this.setState({ color });
	render() {
        const ctx = {
            color: this.state.color,
            changeColor: this.changeColor
        };
		return (
			// Step2
            <ThemeContent.Provider value={ctx}>
                <div style={{ border: '3px solid red' }}>
                    <h1>父</h1>
                    <Large1 />
                    <Large2 />
                </div>
            </ThemeContent.Provider>
		);
	}
}
