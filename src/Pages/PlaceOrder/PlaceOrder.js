import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';



const PlaceOrder = () => {
      const [place,setPlace]=useState([])
    const {orderId}=useParams();
    console.log(orderId);
    console.log(place)
useEffect(()=>{
    const url=`https://shielded-brushlands-87439.herokuapp.com/products/${orderId}`
    console.log(url)
    fetch(url)
    .then(res=>res.json())
    .then(data=>setPlace(data))
},[])
    return (
        <div>

            <h1>friend details:{orderId}</h1>
            <h4>Ride name: {place.title}</h4>
         <img src={place.imgUrl} alt="not found" />
         
        </div>
    );
};

export default PlaceOrder;