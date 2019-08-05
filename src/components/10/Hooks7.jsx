import React, {useState} from 'react';

export default function Counter(props) {
    console.log('render');
    function getInitState() {
        return {
            number: props.number
        };
    }
    // useState 可以接收一个函数
    let [counter, setCounter] = useState(getInitState);
    return (
        <>
            {counter.number}
            <button onClick={() => setCounter({number: counter.number+1})}>+</button>
            {/* 直接传的是老状态，则不会重新渲染 */}
            <button onClick={() => setCounter(counter)}>+</button>
        </>
    )
}
Counter.defaultProps = {
    number: 5
};