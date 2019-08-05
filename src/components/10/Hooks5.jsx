import React, {useState} from 'react';

// 惰性初始化
export default function Counter(props) {
    // useState 可以接收一个函数
    let [counter, setCounter] = useState(function() {
        return {
            number: props.number
        };
    });
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