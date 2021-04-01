// import { Link } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
import { Table } from 'react-bootstrap';


const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext (UserContext);
    
    const history = useHistory();


const {productId} =useParams();
const [product ,setProduct] = useState({});
const handleCheckOut = () =>{
    const orderDetails = {...loggedInUser, product: product, orderTime: new Date()}
    console.log(orderDetails);

    fetch('http://localhost:5000/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(orderDetails)
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
    })
    
}

   
    useEffect(()=>{
        fetch(`http://localhost:5000/product/${productId}`)
        .then(res =>res.json())
        .then(data =>{ setProduct(data)
           
        console.log(data)});

    },[])
    

    return (
        <div>
            <Table striped bordered hover>
            <thead>
    <tr>
      <th>product name</th>
      <th>product price</th>
      <th>quantity</th>
      <th>wight</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>1</td>
      <td>{product.wight}</td>
    </tr>
  </tbody>

        </Table>
        <Link className="btn btn-success" onClick={()=> handleCheckOut} to ="/orders">check Out</Link>
        </div>
        
    );
};

export default Orders;


