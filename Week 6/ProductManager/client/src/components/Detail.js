import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";
const Detail = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams(); 
    console.log( id, "this is id")
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then( (response) => {
                console.log(response, "look here");
                setProduct(response.data);
            })
            .catch( err => console.log(err) );
    }, []);
    return (
        <div>
            <p>Product: {product.title}</p>
            <p>Price: {product.price}</p>
        </div>
    );
}
export default Detail;