import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Paper } from '@material-ui/core';

const ProductList = (props) => {
    /* We deconstruct getter and setter which were passed down 
    via props by the parent component (app.js) to our child 
    component (PersonList.js). Now we can easily use the getter 
    and setter without having to write props.getter or props.setter every time: */
    const {removeFromDom, product, setProduct} = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
        .then(res => {
            setProduct(product.filter(product => product._id != productId))
            // removeFromDom(productId)
        })
        .catch(err => console.log(err))

    }
    
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
                            <Link to={`/product/${products._id}`}> {products.title} </Link>
                            <Link to={`/product/edit/${products._id}`}> Edit </Link>
                            <button onClick={(e)=>{deleteProduct(products._id)}}>Delete</button>
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