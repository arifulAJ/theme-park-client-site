import React from 'react';
import useAuth from '../../constext/useAuth';
import { Route,Redirect } from 'react-router-dom';

const Privet = ({children,...rest}) => {
    const {user}=useAuth()
    return (
        <Route
        {...rest}
        render={({location})=>user.email?(children):<Redirect
        to={{
            pathname: "/login",
            state: { from: location }
          }}
        ></Redirect>}
        >
            
        </Route>
    );
};

export default Privet;