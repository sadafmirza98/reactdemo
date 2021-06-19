import React, { useEffect, useState } from 'react';

const HelloComponent = (props) => {
    console.log('Render Start');

    const [count, setCount] = useState(() => {
        console.log('init count state');
        return 0;
    });

    useEffect(() => {
        console.log('Component updated');
    })

    const Component = <div>Hello {count}</div>

    console.log('Render End');
    
    return Component
}

export default HelloComponent