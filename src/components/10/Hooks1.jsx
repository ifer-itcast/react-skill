import React from 'react';

export default class Counter extends React.Component {
    // 私有属性
    state = {
        number: 0
    }
    add = () => {
        this.setState({
            number: this.state.number + 1
        });
    }
    render() {
        return (
            <>
                {this.state.number}
                <button onClick={this.add}>+</button>
            </>
        )
    }
}