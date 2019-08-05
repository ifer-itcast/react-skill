import React, {useState} from 'react';

// 减少渲染次数
export default function Counter(props) {
    console.log('counter render');
    const [name, setName] = useState('计数器');
    const [number, setNumber] = useState(0);
    const data = {number};
    const addClick = () => {
        setNumber(number => number+1);
    };
    return (
        <>
            {/* 修改 input 框中的值 SubCounter 不需要刷新！ */}
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <SubCounter/>
        </>
    )
}

function SubCounter({onClick=()=>{}, data={number: 0}}) {
    console.log('subCounter render');
    return (
        <button onClick={onClick}>{data.number}</button>
    );
}

// Step1
// input 框输入内容时只会渲染 Counter 组件
// 注意 <SubCounter/> 没有传值，传值的话每次渲染父组件，传递的值也会是全新的
// 即便你把 data 和 addClick 搞成全局的，下次渲染重新赋值一个新对象时也不是之前的了
SubCounter = React.memo(SubCounter);