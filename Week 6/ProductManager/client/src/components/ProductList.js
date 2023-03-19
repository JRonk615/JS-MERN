import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
const ProductList = (props) => {
    /* We deconstruct getter and setter which were passed down 
    via props by the parent component (app.js) to our child 
    component (PersonList.js). Now we can easily use the getter 
    and setter without having to write props.getter or props.setter every time: */
    const {product, setProduct} = props;
    
    useEffect(()=>{
    	axios.get("http://localhost:8000/api/product")
    	.then((res)=>{
	    console.log(res.data);
            setProduct(res.data);
	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, [])
    
    return (
        <div>
            {
                product.map((products, index) => {
                    return (
                        <div key = {index}>
                            <p> {products.title}</p>
                            <p> {products.price} </p>
                            <p> {products._id}</p>
                            <Link to={`/product/${products._id}`}> {products.title} </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ProductList;

// product.map((product, index)=>{
//     return <p key={index}>{product.title}, {product.price}</p>
//     })