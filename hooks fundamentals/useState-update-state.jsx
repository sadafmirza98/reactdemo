import React, { useEffect, useState } from 'react';

const HelloComponent = (props) => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount((oldValue) => {
                const value = oldValue - 1;
                return value;
            })}>Decrement</button>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default HelloComponent