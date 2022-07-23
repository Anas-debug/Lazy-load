import React,{useState, useEffect} from "react";
import axios from 'axios';

function Fetch() {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);


    useEffect(() => {
        getImges();
    });

    const getImges = async() => {
        try{
            let imagesRetreived = await axios.get(
                `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
                );
            if(imagesRetreived){
                setImages([...images, ...imagesRetreived.data]);
                console.log(images);
            } 
        }catch(error) {
                console.log("Error getting data");
        }
        const content = images.map((image) => {
            <div>{image}</div>
        });
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

