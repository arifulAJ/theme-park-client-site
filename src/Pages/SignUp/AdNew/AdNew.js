import React from 'react';
import useAuth from '../../../constext/useAuth';
import { useForm } from "react-hook-form";
import './AddNew.css'
import axios from 'axios';
const AdNew = () => {
  const {user}=useAuth()
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
  axios.post('https://shielded-brushlands-87439.herokuapp.com/products',data)
  .then(res=>{
    console.log(res)
  })
  }
  return (
    <div className="addSer pt-5">
      <h1 style={{textAlign:'center'}}>Add new service holder  </h1>
      <h6 style={{textAlign:'center',paddingBottom:'10px'}}>user: {user.email}</h6>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("img")} placeholder="image" />
      <input {...register("firstName")}  placeholder="name"/>
      <textarea {...register("description", )} placeholder="description" />
      <input type="number" {...register("price" )} placeholder="price" />
      <input type="submit" />
    </form>
    </div>
  );
};

export default AdNew;