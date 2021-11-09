import React from 'react';
import useAuth from '../../../constext/useAuth';
import { useForm } from "react-hook-form";
import './AddNew.css'

const AdNew = () => {
  const {user}=useAuth()
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
  fetch('https://shielded-brushlands-87439.herokuapp.com/addService',{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(data)
  })
  // axios.post('https://shielded-brushlands-87439.herokuapp.com/products')
  .then(res=>{
    console.log(res)
  })
  .then(result=>{
    console.log(result)
  })
  }
  return (
    <div className="addSer pt-5">
      <h1 style={{textAlign:'center'}}>Add new service holder  </h1>
      <h6 style={{textAlign:'center',paddingBottom:'10px'}}>user: {user.email}</h6>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("imgUrl")} placeholder="image url" />
      <input {...register("title")}  placeholder="name"/>
      <textarea {...register("description", )} placeholder="description" />
      <input type="number" {...register("price" )} placeholder="price" />
      <input type="submit" />
    </form>
    </div>
  );
};

export default AdNew;