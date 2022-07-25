import React, {useState, useEffect} from 'react';

export default function HookPractice(){
    const [data, setData] = useState({});
    const [count, setCount] = useState(0);


    useEffect(() =>{
        // console.log("Effect Run");
        fetch("https://pokeapi.co/api/v2/pokemon/ditto")
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    return(
        <div>
            <pre>{JSON.stringify(data, null, 3)}</pre>
            <div>
                <h1>{}</h1>
            </div>
            <h1>You Clicked {count} times!</h1>
            <button onClick ={() => {setCount(count+1)}}>Add</button>
            <button onClick = {() => {setCount(0)}}>Reset</button>
        </div>
    );
}