import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';




const PlaceOrder = () => {
      const [place,setPlace]=useState([])
    const {orderId}=useParams();
console.log(place)
useEffect(()=>{
    const url=`https://shielded-brushlands-87439.herokuapp.com/products/${orderId}`
    
    fetch(url)
    .then(res=>res.json())
    .then(data=>setPlace(data))
},[])
    return (
        <div>
     <div class="card mb-3 container">
  <img src={place.imgUrl} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{place.title}</h5>
    <p class="card-text">{place.description}</p>
  <Link  to={`/users/${place._id}` }><button className="btn btn-danger">OrderPerch</button></Link>
  </div>
</div>


            {/* <h1>friend details:{orderId}</h1>
            <h4>Ride name: {place.title}</h4>
         <img src={place.imgUrl} alt="not found" /> */}
         
        </div>
    );
};

export default PlaceOrder;