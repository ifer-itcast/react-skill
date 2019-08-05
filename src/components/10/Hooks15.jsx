import React, { useState, useEffect} from 'react';

export default function Counter() {
    let [number, setNumber] = useState(0);
    useEffect(() => {
        console.log('开启了新的定时器');
        // 每渲染一次都会产生一个定时器，需要清除
        const $timer = setInterval(() => {
            setNumber(number=>number+1);
        }, 1000);
        return () => {
            // 下次渲染会先执行这里的返回内容
            clearInterval($timer);
        };
    })
    return (
        <>
            <p>{number}</p>
            <button onClick={() => setNumber(number+1)}>++</button>
        </>
    );
}