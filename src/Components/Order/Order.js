import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import AllData from '../AllData/AllData';




const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [order, setOrder] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/order?email=${loggedInUser.email}`, {
            method: "GET",
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setOrder(data)
            })
    }, [])

    return (
        <div>
           <ul>
               {
                   order.map(order => <AllData order ={order}></AllData>)
               }
           </ul>
        </div>
    );
};

export default Order;