import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams, useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom';
const Detail = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams(); 
    const navigate = useNavigate();

    console.log( id, "this is id")
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then( (response) => {
                console.log(response, "look here");
                setProduct(response.data);
            })
            .catch( err => console.log(err) );
    }, []);

    const deleteProduct = () => {
        axios.delete('http://localhost:8000/api/product/' + id)
        .then(res => {
            console.log(res)
            // setProduct(product.filter(product => product._id != id))
            navigate('/')
            // removeFromDom(id)
        })
        .catch(err => console.log(err))

    }

    return (
        <div>
            <p>Product: {product.title}</p>
            <p>Price: {product.price}</p>
            <button onClick={deleteProduct}> Delete</button>
            <Link to={'/'}> home </Link>
        </div>
    );
}
export default Detail;