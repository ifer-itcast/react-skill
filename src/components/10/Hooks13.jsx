import React, { useState} from 'react';

export default class Counter extends React.Component {
    state = {number: 0}
    componentDidMount() {
        document.title = `你现在一共点击了${this.state.number}次`;
    }
    componentDidUpdate() {
        document.title = `你现在一共点击了${this.state.number}次`;
    }
    render() {
        return (
            <>
                <p>{this.state.number}</p>
                <button onClick={() => this.setState({number: this.state.number + 1})}>++</button>
            </>
        );
    }
}