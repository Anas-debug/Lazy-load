import React, { useState } from 'react';

export default function ApiCall(){
    const [apiData, setApiData] = useState({});
    

    fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data =>{
            setApiData(data);
            console.log(data);
        } );

    return(
        <div>
            <pre> { JSON.stringify(apiData, null, 2) } </pre>
            <h1>Fetched Data successfully!</h1>
        </div>
    );

}