import React, {useState} from 'react';

export default function Counter() {
    let [number, setNumber] = useState(0)
    return (
        <>
            {number}
            <button onClick={() => setNumber(number+1)}>+</button>
        </>
    )
}