import React from 'react';
import { useParams } from 'react-router';

const UserDetail = () => {
    const {id}=useParams();
    console.log(id)
    return (
        <div>
            <h1>user details</h1>
        </div>
    );
};

export default UserDetail;