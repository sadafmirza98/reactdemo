import React,{useEffect, useState} from 'react';

const HelloComponent = (props) => {
    const[count,setCount] = useState(0);
    const [initNumber,setInitNumber] = useState(() => 0);

    useEffect(()=> {
        console.log('count value', count);
        console.log('initNumber value,initNumber');

    })

    return (
        <div>
            <div>
                Count:{count}
            </div>
           <div>
                Init Number: {initNumber}
            </div> 
        </div>
    )
}

export default HelloComponent;