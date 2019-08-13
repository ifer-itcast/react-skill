import React, {Component} from 'react';

export default class Counter extends Component {
    state = {
        counter: 0
    }
    increment = () => {
        this.setState(prevState => ({counter: prevState.counter + 1}));
    }
    decrement = () => {
        this.setState(prevState => ({counter: prevState.counter - 1}));
    }
    render() {
        return (
            <div>
                <p>Counter: {this.state.counter}</p>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        );
    }
}