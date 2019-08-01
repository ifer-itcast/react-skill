import React, {Component} from 'react';
import {Button} from 'antd';

export default class BindEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState((prevState, props) => ({num: prevState.num+1}));
    }
    render() {
        const {num} = this.state;
        return (
            <div>
                <p>{num}</p>
                <Button type="primary" onClick={this.handleClick}>点击</Button>
            </div>
        );
    }
}