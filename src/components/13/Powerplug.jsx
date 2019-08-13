import React, {Component} from 'react';
import {State} from 'react-powerplug';

export default class Counter extends Component {
    render() {
        return (
            <State initial={{counter: 0}}>
                {
                    ({state, setState}) => (
                        <>
                        <p>Counter: {state.counter}</p>
                        <button onClick={() => setState({counter: state.counter+1})}>Increment</button>
                        <button onClick={() => setState({counter: state.counter-1})}>Decrement</button>
                        </>
                    )
                }
            </State>
        );
    }
}