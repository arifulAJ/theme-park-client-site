import React from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../constext/useAuth';
import useFirebase from '../../Hook/UseFirebase';




const SignUp = () => {
    const {user,gooleSingn,signOutat}=useAuth();
    
    return (
        <div className="text-center p-5 m-5"> 
            <h6>name:{user.displayName}</h6>
            <h6>email:{user.email}</h6>
        <button  onClick={gooleSingn} className="btn btn-danger">Sign with google </button><br /><br />
        <button onClick={signOutat} className="btn btn-danger">log out </button>
        </div>
    );
};

export default SignUp;