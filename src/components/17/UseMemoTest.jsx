import React , {useState,useMemo} from 'react';
function ChildComponent({count,children}){
    function changeCount(count){
        console.log('count 变化的方法执行了')
        return count;
    }

    // const actionCount = changeCount(count)
    // [count] 代表只有 count 变化时才执行此函数
    const actionCount = useMemo(() => changeCount(count), [count]);
    return (
        <>
            <div>{actionCount}</div>
            <div>{children}</div>
        </>
    )
}

// 问题：点击 number 按钮，count 的结果没变，但是改变 count 的方法每次都执行，这就是性能损耗
export default () => {
    const [count , setCount] = useState(0)
    const [number , setNumber] = useState(0)
    return (
        <>
            <button onClick={()=>{setCount(count+1)}}>count++</button>
            <button onClick={()=>{setNumber(number+1)}}>number++</button>
            <ChildComponent count={count}>{number}</ChildComponent>
        </>
    )
}