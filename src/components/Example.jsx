import React, {useState, useEffect} from 'react';

export default function Example(){
    const [count, setCount] = useState(0);

    useEffect(()=>{
        document.title= `You clicked ${count} times`;
    })

    return(
        <div>
            <h1>You cliked number {count} times</h1>
            <button onClick = {()=>{setCount(count + 1)}}>
                Click me!
            </button>
        </div>
    );
}