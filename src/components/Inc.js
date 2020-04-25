import React from 'react';
import { useInc } from '../hooks/useInc'

 const Inc = () => {
    const [ value, { inc, dec, reset} ] = useInc({
        maxValue: 10,
        minValue: 0,
        initial: 4
    });
    return (
        <div>
            <button onClick={dec}>-</button>
            {value}
            <button onClick={inc}>+</button>
            <button onClick={reset}>Reset Volume</button>
        </div>
    )
}

export default Inc;
