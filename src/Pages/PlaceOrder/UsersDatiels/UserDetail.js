import React from 'react';
import { useParams } from 'react-router';

const UserDetail = () => {
    const {id}=useParams();
    console.log(id)
    return (
        <div className='text-center'>
            <h1 className='py-5'>Thanks for the parching our product</h1>
            <img src="https://images.unsplash.com/photo-1585650159238-21e5e79a5fce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHRodW1icyUyMHVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
    );
};

export default UserDetail;