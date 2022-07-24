import React, {useState, useEffect} from 'react';

export default function FetchJSonPlaceholder(){

    const [data, setData] = useState({});

    const fetchedData = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))

    setData(fetchedData);

    return(
        <div>{data}</div>
    );

}