import React, { Component, useReducer, createContext ,useContext} from 'react';

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

let CounterContext = createContext();


/* class SubCounter extends Component {
    static contextType = CounterContext
    // this.context.state
} */

/* function SubCounter() {
    return (
        <CounterContext.Consumer>
        {
            value => (
                <>
                    <p>{value.state.number}</p>
                    <button onClick={() => value.dispatch({type: 'ADD'})}>+</button>
                </>
            )
        }
        </CounterContext.Consumer>
    );
} */

function SubCounter() {
    const {state, dispatch} = useContext(CounterContext)
    return (
        <>
            <p>{state.number}</p>
            <button onClick={() => dispatch({type: 'ADD'})}>+</button>
        </>
    );
}

export default function Counter() {
    const [state,dispatch] = useReducer(reducer, initialState, ()=>({number: initialState}));
    return (
        <CounterContext.Provider value={{state, dispatch}}>
            <SubCounter/>
        </CounterContext.Provider>
    );
}