import React, {useState, memo, useMemo, useCallback} from 'react';

// 减少渲染次数
let oldData, oldCallback;
export default function Counter(props) {
    console.log('counter render');
    const [name, setName] = useState('计数器');
    const [number, setNumber] = useState(0);
    // Step1
    const data = useMemo(() => ({number}), [number]);
    console.log('~~~~~~~data:',oldData === data);
    oldData = data;
    // Step2
    const addClick = useCallback(() => {
        // setNumber(number => number+1);
        setNumber(number+1);
    }, [number]);
    console.log('~~~~~~~~callback:',oldCallback === addClick);
    oldCallback = addClick;
    return (
        <>
            {/* 修改 input 框中的值 SubCounter 不需要刷新！ */}
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <SubCounter data={data} onClick={addClick}/>
        </>
    )
}

function SubCounter({onClick, data}) {
    console.log('subCounter render');
    return (
        <button onClick={onClick}>{data.number}</button>
    );
}

// Step3
SubCounter = React.memo(SubCounter);