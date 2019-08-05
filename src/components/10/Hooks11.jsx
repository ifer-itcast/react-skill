import React, { Component, useReducer } from 'react';

/* const initialState= {
    number: 0
}; */
const initialState= 0;
function reducer(state=initialState, action) {
    switch(action.type) {
        case 'ADD':
            return {
                number: state.number + 1
            };
        default:
            break;
    }
}

export default function Counter() {
    const [state,dispatch] = useReducer(reducer, initialState, ()=>({number: initialState}));
    return (
        <>
            <p>{state.number}</p>
            <button onClick={() => dispatch({type: 'ADD'})}>+</button>
        </>
    );
}

