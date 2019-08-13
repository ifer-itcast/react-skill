import React, { Component } from 'react';

/* export default class Fragment extends Component {
    render() {
        return (
            <>
                <p>1</p>
                <p>2</p>
                <p>3</p>
            </>
        );
    }
} */

// const Wrapper = ({children}) => children;
const Wrapper = (props) => props.children;

export default class Fragment extends Component {
    render() {
        return (
            <Wrapper>
                <p>1</p>
                <p>2</p>
                <p>3</p>
            </Wrapper>
        );
    }
}