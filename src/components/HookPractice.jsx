import React, {useState, useEffect} from 'react';

export default function HookPractice(){
    const [data, setData] = useState({});
    const [count, setCount] = useState(0);


    useEffect(() =>{
        console.log("Effect Run");
    })

    return(
        <div>
            <h1>You Clicked {count} times!</h1>
            <button onClick ={() => {setCount(count+1)}}>Add</button>
            <button onClick = {() => {setCount(0)}}>Reset</button>
        </div>
    );
}