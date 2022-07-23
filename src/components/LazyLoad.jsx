import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LazyLoad() {
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
            } 
        }catch(error) {
                console.log("Error getting data");
        }

        return(
            <div>
                <div>
                    {images.map((image) => {
                        <div key = {image.id}>
                             <h4>id: {image.id}</h4>
                            <img src ={image.url} height ="200px" width = "250px"  />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default LazyLoad;