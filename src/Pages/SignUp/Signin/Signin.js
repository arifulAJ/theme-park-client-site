import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../constext/useAuth';

const Signin = () => {
    const {user,handelSignIn,handelEmail,handelPassword}=useAuth();
    return (
        <div className="text-center pt-5 pb-5">
          <div>
          <form onSubmit={handelSignIn}>
           <input  className="p-1 m-2" onBlur={handelEmail} type="email" placeholder="enter your email" /><br />
            <input  className="p-1 m-2" onBlur={handelPassword} type="password" placeholder="enter your password" /><br />
            <input className="btn btn-danger" type="submit" value="sign In" />
          </form>
        </div>
        <h4>email:{user.email}</h4>
        <h6>Create an account :<Link to='/signup'>sign Up</Link></h6>
        </div>
    );
};

export default Signin;