import React from 'react';
// import Banner from '../Banner/Banner';
import Banner from './../Banner/Banner';
import BussService from './BussService/BussService';
import Pakage from './Pakage/Pakage';
import RideCart from './RideCart/RideCart';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <div className="pt-5 pb-5">
           <h1 style={{textAlign:'center',paddingBottom:'20px',fontWeight:"bolder",fontFamily:'sans-serif'}}>We are provide those ride & picnic sport </h1>
            <RideCart></RideCart>
           </div>
        <div>
            <h1 style={{textAlign:'center',paddingBottom:'20px'}}>Our transport way is only bus </h1>
        <BussService></BussService>
        </div>
        <div>
            <h1 style={{textAlign:'center',paddingBottom:'20px'}} >Combo package </h1>
            <Pakage></Pakage>
        </div>
            
        </div>
    );
};

export default Home;