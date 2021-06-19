import React, { useEffect, useState } from 'react';

const HelloComponent = (props) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('call every time when component render/ re-render ');
    })
    
    useEffect(() => {
        console.log('Perfomr action');
    }, [])

    useEffect(() => {
        console.log('render first time ');
        () => console.log('Cleaning Component') 
    }, []) 

    useEffect(() => {
        console.log('call only when component render first time or count get updated ');
    }, [count]) 

    return <div>Hello {count}</div>
}

export default HelloComponent