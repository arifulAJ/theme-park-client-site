import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../constext/useAuth';




const PlaceOrder = () => {
      const [place,setPlace]=useState([])
    const {orderId}=useParams();
console.log(place)
const {user}=useAuth()
const nameRef=useRef()
const handelUser=(e,data)=>{
  e.preventDefault()
  fetch('https://shielded-brushlands-87439.herokuapp.com/controlOrder',{
    method:"POST",
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(data)
  })
  .then(res=>res.json())
  .then(result=>{
    console.log(result)
  })
 
}
console.log(user)
useEffect(()=>{
    const url=`https://shielded-brushlands-87439.herokuapp.com/products/${orderId}`
    
    fetch(url)
    .then(res=>res.json())
    .then(data=>setPlace(data))
},[])
    return (
        <div>
          <h1 className="text-center pt-5 pb-5">Thank you for parches our service</h1>
     <div class="card mb-3 container">
  <img src={place.imgUrl} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{place.title}</h5>
    <p class="card-text">{place.description}</p>
  
  </div>
</div>

<form onSubmit={handelUser} className='text-center p-5'>
  <input  type="text" value={place.title}/><br />
  <textarea className='my-2 ' type="text" value={place.description} /><br />
  <input className='my-2 ' type="text" placeholder="write your house address" /><br />
  <input className='my-2 ' type="text" placeholder={place.price} /><br />
 
  <Link type="submit"  to={`/users/${place._id}` }><button className="btn btn-danger">OrderPerch</button></Link>
</form>
         
        </div>
    );
};

export default PlaceOrder;