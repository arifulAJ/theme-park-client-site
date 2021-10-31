import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import useAuth from '../../constext/useAuth';






const SignUp = () => {
    const {user,setUser,googleSignIn,signOutAt,handelEmail,handelPassword,handelSignup}=useAuth();
    const history=useHistory();
    // const [users,setUsers]=useState([])
    const location=useLocation();
    const uri=location.state?.form||'/home'
   
  
    const handelGoogleIn=()=>{
        googleSignIn()
          .then((result) => {
        
            setUser(result.user)
          history.push(uri)
          })

    }
   
    
    return (
        <div className="sig">
               <h1 className="text-center bolder ">Login with your email and password</h1>
               <div className="row row-cols-lg-2 row-cols-1 container" >
        
        <div className="text-center pt-5 mt-5  "> 
           
           
            <button  onClick={handelGoogleIn} className="btn btn-danger">Sign with google </button><br /><br />
            <button onClick={signOutAt} className="btn btn-danger">log out </button>
            
            <h6 className="pt-5">Email : {user.email}</h6>
        </div>
        <div className="text-center pt-5 mt-5 ">
          <form onSubmit={handelSignup}>
           <input className="p-1 m-2" onBlur={handelEmail} type="email" placeholder="enter your email" /><br />
            <input className="p-1 m-2" onBlur={handelPassword} type="password" placeholder="enter your password" /><br />
            <input className="btn btn-danger mt-3" type="submit" value="sign Up" />
          </form>
        </div>
        <h6 className="text-center">Already have an account: <Link to='/signin'>sign In</Link> </h6>
       </div>

        </div>
      
    );
};

export default SignUp;