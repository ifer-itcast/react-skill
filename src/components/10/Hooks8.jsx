import React, {useState} from 'react';

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
