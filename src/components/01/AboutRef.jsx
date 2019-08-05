import React, {Component} from 'react';

export default class AboutRef extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    handleClick = () => {
        // this.inputRef.current.refs.test.style.backgroundColor = 'red';
        this.inputRef.current.style.backgroundColor = 'red';
    }
    render() {
        return (
            <div>
                <Test ref={this.inputRef}/>
                <button onClick={this.handleClick}>改变组件</button>

            </div>
        );
    }
}

/* class Test extends Component {
    render() {
        return (
            <div ref="test">hello world</div>
        );
    }
} */

const Test = React.forwardRef((props, ref) => {
    return (
        <div ref={ref}>hello world</div>
    );
});

