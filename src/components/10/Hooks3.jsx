import React, {useState} from 'react';

export default function Counter() {
    let [number, setNumber] = useState(0);
    function alertNumber() {
        setTimeout(() => {
            // 先点第二个按钮，再多次点击+按钮，看弹出的 number 看是多少
            // 是当时点击时的 number 值 0
            alert(number)
        }, 3000);
    }
    return (
        <>
            {number}
            <button onClick={() => setNumber(number+1)}>+</button>
            <button onClick={alertNumber}>先点我</button>
        </>
    )
}