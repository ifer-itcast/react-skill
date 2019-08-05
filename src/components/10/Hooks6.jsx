import React, {useState} from 'react';

// 惰性初始化
export default function Counter(props) {
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
        </>
    )
}
Counter.defaultProps = {
    number: 5
};