import React, { useEffect } from 'react';
import { useParams } from 'react-router';

const PlaceOrder = () => {
    const {orderId}=useParams();
    console.log(orderId);
useEffect(()=>{
    const url=`https://jsonplaceholder.typicode.com/users/${orderId}`
    console.log(url)
    fetch(url)
    .then(res=>res.json())
    .then(data=>console.log(data))
},[])
    return (
        <div>
            <h1>order your items</h1>
        </div>
    );
};

export default PlaceOrder;