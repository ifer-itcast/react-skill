import React, { useState, useEffect} from 'react';

// effect
// 用函数式组件实现 13 的功能
export default function Counter() {
    let [number, setNumber] = useState(0);
    // 每次渲染完后执行 effect，第一次是初始化渲染后，第二次是更新状态后...
    useEffect(() => {
        document.title = `你现在一共点击了${number}次`;
    }, [number])
    return (
        <>
            <p>{number}</p>
            <button onClick={() => setNumber(number+1)}>++</button>
        </>
    );
}