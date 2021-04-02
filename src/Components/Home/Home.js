import React, { useEffect, useState } from 'react';
import ManageProduct from '../AddProducts/ManageProduct/ManageProduct';
import Product from '../Product/Product';

const Home = () => {
    

    const [products , setProducts] = useState([])
    useEffect (() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then (data => setProducts(data))
    }, [])

   
    return (
        <div  >
            {
                products.length ===0 && <div class = "spinner-grow" role ="status">
                    <span class ="sr-only">loading</span>
                </div>
            }
           
            <div className ="row">
            {
                products.map(product => <Product product ={product}></Product>)
            }
             
            </div>
            
        </div>
    );
};

export default Home;