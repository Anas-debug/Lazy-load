import React,{useState, useEffect} from "react";
import axios from 'axios';

function Fetch() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    });

    const getData = async() => {
        try{
            let dataRetreived = await axios.get(
                'https://jsonplaceholder.typicode.com/todos/1'
                );
            if(dataRetreived){
                setData(dataRetreived);
                console.log(data);
            } 
        }catch(error) {
                console.log("Error getting data");
        }
        return(
            <div>
                <div>Images List</div>
                <div>
                </div>
            </div>
        )
    }
}

export default Fetch;

