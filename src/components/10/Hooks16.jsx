import React, { useState, useEffect} from 'react';

export default function Counter() {
    let [number, setNumber] = useState(0);
    useEffect(() => {
        console.log('开启了新的定时器');
        // 每渲染一次都会产生一个定时器，需要清除
        const $timer = setInterval(() => {
            setNumber(number=>number+1);
        }, 1000);
        // 第二个参数放个空数组也可以
        // 第二次走时，发现数组里面没有依赖的数据，就不会执行 effect 了
    }, [])
    return (
        <>
            <p>{number}</p>
            <button onClick={() => setNumber(number+1)}>++</button>
        </>
    );
}