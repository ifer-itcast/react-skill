import React from 'react';

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false
        };
    }
    componentDidCatch(error, info) {
        this.setState({
            error,
            info
        });
    }
    render() {
        if(this.state.error) {
            return (
                <h1>出错啦！</h1>
            );
        }
        return this.props.children;
    }
}

export default class Test extends React.Component {
    state = {
        count: 0
    }
    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        }, () => {
            if(this.state.count === 4) {
                throw new Error('Duang！');
            }
        });
    }
    render() {
        return (
            <button onClick={this.handleClick}>加</button>
        );
    }
}