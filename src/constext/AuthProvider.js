import React, { createContext } from 'react';
import useFirebase from '../Hook/UseFirebase';
export const AuthContext=createContext();
const AuthProvider = ({children}) => {
    const allContent=useFirebase()
    return (
        <AuthContext.Provider value={allContent}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;