import React, {useState} from 'react';

// 函数式更新
export default function Counter() {
    let [number, setNumber] = useState(0);
    function addNumber() {
        setTimeout(() => {
            // 先点右侧的按钮，再点左侧的按钮，定时器到时会把左侧的值归为1
            // setNumber(number + 1);
            // 解决：取的是最新的页面看到的 number 值
            setNumber(number => number+1);
        }, 3000);
    }
    return (
        <>
            {number}
            <button onClick={() => setNumber(number+1)}>+</button>
            <button onClick={addNumber}>我是定时器</button>
        </>
    )
}